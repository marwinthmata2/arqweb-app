export const dynamic = "force-dynamic";

export default function TwCheck() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="bg-pink-500 text-white p-6 rounded-xl text-center space-y-2 shadow-lg">
        <div className="text-2xl font-bold">PRUEBA TAILWIND</div>
        <div className="text-sm opacity-90">
          ✅ Si ves este bloque rosa, Tailwind está funcionando.
        </div>
      </div>
      <a
        href="/"
        className="inline-block bg-black/30 hover:bg-black/50 transition px-4 py-2 rounded-lg text-white ml-6"
      >
        ← Volver al inicio
      </a>
    </div>
  );
}
