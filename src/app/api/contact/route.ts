/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Esquema de validación del payload
const ContactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(80, "Nombre muy largo"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(2, "Asunto muy corto").max(120, "Asunto muy largo"),
  message: z.string().min(10, "Mensaje muy corto").max(2000, "Mensaje demasiado largo"),
});

// Instancia de Resend con tu API key (desde .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

// Health-check rápido del endpoint
export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "contact", message: "UP" });
}

// Maneja el envío del formulario
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    // Variables obligatorias desde .env.local
    const apiKeyOk = !!process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!apiKeyOk || !fromEmail || !toEmail) {
      return NextResponse.json(
        {
          ok: false,
          error: "MISCONFIGURED",
          missing: {
            RESEND_API_KEY: apiKeyOk,
            FROM_EMAIL: !!fromEmail,
            TO_EMAIL: !!toEmail,
          },
        },
        { status: 500 }
      );
    }

    // HTML simple (no dependemos de plantillas para evitar errores)
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6;">
        <h2>Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space: pre-wrap; background: #f6f6f6; padding: 12px; border-radius: 8px;">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail!,
      to: toEmail!,
      subject: `Contacto: ${subject}`,
      reply_to: email, // para que puedas responder directo desde tu inbox
      html,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: (error as any)?.message ?? String(error) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "UNKNOWN_ERROR" },
      { status: 500 }
    );
  }
}

// Pequeña utilidad para evitar XSS en el HTML del correo
function escapeHtml(str: string) {
  return str.replace(/[&<>"']/g, (ch) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[ch];
  });
}
