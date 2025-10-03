import Link from "next/link";

export const dynamic = "force-dynamic"; // evita caché en Vercel

export default function TwCheck() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="bg-pink-500 text-white p-8 rounded-xl text-center space-y-2">
        <div className="text-2xl font-bold">PRUEBA TAILWIND</div>
        <div className="text-sm opacity-90">
          ✅ Si ves este bloque rosa, Tailwind está funcionando.
        </div>
      </div>

      <Link
        href="/"
        className="absolute bottom-6 inline-block bg-black/30 hover:bg-black/50 text-white px-4 py-2 rounded-lg transition"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}
