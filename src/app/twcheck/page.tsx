export const dynamic = "force-static"; // que la exporte como estática

export default function TwCheck() {
  return (
    <div className="min-h-screen grid place-items-center bg-neutral-900">
      <div className="bg-pink-500 text-white p-6 rounded-xl text-center space-y-2 shadow-lg">
        <div className="text-2xl font-bold">PRUEBA TAILWIND</div>
        <div className="text-sm opacity-90">
          Si ves este bloque <b>rosa</b>, Tailwind está funcionando ✅
        </div>
        <a
          href="/"
          className="inline-block mt-4 bg-black/30 hover:bg-black/50 transition px-4 py-2 rounded-lg"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}
