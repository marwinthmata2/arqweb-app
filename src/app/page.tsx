export default function Home() {
  return (
    <>
      {/* 🔴 Bloque rosa de prueba muy visible */}
      <div className="bg-pink-500 text-white p-6 rounded-xl text-center">
        Tailwind funcionando 🎉
      </div>

      {/* Tu contenido debajo (puedes pegar lo que tenías luego de esto) */}
      <main className="p-8">
        <h1 className="text-2xl font-bold">ArqWeb</h1>
        <p className="text-slate-300 mt-2">
          Base con Next.js + TypeScript + Tailwind.
        </p>
      </main>
    </>
  );
}
