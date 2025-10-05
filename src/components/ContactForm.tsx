"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ----------------------------- Validación Zod ----------------------------- */
const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Tu nombre debe tener al menos 2 caracteres")
    .max(80, "Máximo 80 caracteres"),
  email: z.string().email("Email no válido"),
  subject: z
    .string()
    .min(3, "El asunto es obligatorio")
    .max(120, "Máximo 120 caracteres"),
  message: z
    .string()
    .min(10, "Cuéntame un poco más (mínimo 10 caracteres)")
    .max(2000, "Máximo 2000 caracteres"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

/* --------------------------------- UI ---------------------------------- */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMsg, setServerMsg] = useState<string>("");

  async function onSubmit(values: ContactFormValues) {
    try {
      setStatus("loading");
      setServerMsg("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({} as any));

      if (!res.ok || data?.ok === false) {
        const msg =
          data?.error ||
          data?.message ||
          "No se pudo enviar el mensaje. Intenta nuevamente.";
        setStatus("error");
        setServerMsg(msg);
        return;
      }

      setStatus("success");
      setServerMsg(data?.message || "Mensaje enviado con éxito.");
      reset();
    } catch (err) {
      setStatus("error");
      setServerMsg("Error de red. Revisa tu conexión e inténtalo otra vez.");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-3xl rounded-2xl bg-gray-900/60 p-6 shadow-xl ring-1 ring-white/10"
    >
      <p className="mb-6 text-gray-300">
        ¿Tienes una idea o proyecto? Envíame un mensaje y te responderé lo antes
        posible.
      </p>

      {/* Nombre */}
      <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
        Nombre
      </label>
      <input
        id="name"
        type="text"
        autoComplete="name"
        {...register("name")}
        disabled={isLoading}
        className="mb-1 w-full rounded-lg border border-white/10 bg-gray-800 px-4 py-3 text-gray-100 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500"
        placeholder="Tu nombre"
      />
      {errors.name && (
        <p className="mb-4 text-sm text-pink-400">{errors.name.message}</p>
      )}

      {/* Email */}
      <label htmlFor="email" className="mb-2 mt-2 block text-sm text-gray-300">
        Email
      </label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        {...register("email")}
        disabled={isLoading}
        className="mb-1 w-full rounded-lg border border-white/10 bg-gray-800 px-4 py-3 text-gray-100 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500"
        placeholder="tucorreo@ejemplo.com"
      />
      {errors.email && (
        <p className="mb-4 text-sm text-pink-400">{errors.email.message}</p>
      )}

      {/* Asunto */}
      <label
        htmlFor="subject"
        className="mb-2 mt-2 block text-sm text-gray-300"
      >
        Asunto
      </label>
      <input
        id="subject"
        type="text"
        {...register("subject")}
        disabled={isLoading}
        className="mb-1 w-full rounded-lg border border-white/10 bg-gray-800 px-4 py-3 text-gray-100 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500"
        placeholder="¿Sobre qué quieres hablar?"
      />
      {errors.subject && (
        <p className="mb-4 text-sm text-pink-400">{errors.subject.message}</p>
      )}

      {/* Mensaje */}
      <label
        htmlFor="message"
        className="mb-2 mt-2 block text-sm text-gray-300"
      >
        Mensaje
      </label>
      <textarea
        id="message"
        rows={6}
        {...register("message")}
        disabled={isLoading}
        className="mb-1 w-full resize-y rounded-lg border border-white/10 bg-gray-800 px-4 py-3 text-gray-100 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500"
        placeholder="Cuéntame tu idea o proyecto..."
      />
      {errors.message && (
        <p className="mb-4 text-sm text-pink-400">{errors.message.message}</p>
      )}

      {/* Alertas */}
      {status === "success" && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-emerald-300 ring-1 ring-emerald-500/30">
          <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-sm">{serverMsg || "Mensaje enviado con éxito."}</p>
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 flex items-start gap-2 rounded-lg bg-pink-500/10 px-4 py-3 text-pink-300 ring-1 ring-pink-500/30">
          <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-pink-400" />
          <p className="text-sm">
            {serverMsg ||
              "Hubo un problema al enviar tu mensaje. Intenta nuevamente."}
          </p>
        </div>
      )}

      {/* Botón */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 inline-flex items-center justify-center rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {/* Mensaje de pie (opcional) */}
      <p className="mt-3 text-xs text-gray-500">
        * Tus datos no se guardarán si no configuramos un proveedor de correo.
      </p>
    </form>
  );
}
