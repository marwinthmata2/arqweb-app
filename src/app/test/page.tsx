import Link from "next/link";

export const dynamic = "force-dynamic"; // evita caché en Vercel

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-800">
      <div className="bg-blue-500 text-white p-8 rounded-xl text-center space-y-2">
        <div className="text-2xl font-bold">PÁGINA DE TEST</div>
        <div className="text-sm opacity-90">
          ✅ Si ves este bloque azul, la página de test funciona.
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
