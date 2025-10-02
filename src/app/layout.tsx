export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondos decorativos (blobs) */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full blur-3xl
                        bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40
                        animate-float" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full blur-3xl
                        bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30
                        animate-float [animation-delay:5s]" />
        {/* Degradado suave en toda la vista */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      </div>

      {/* Contenido principal */}
      <section className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-3xl w-full text-center rounded-2xl border border-white/10
                        bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-12">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            ArqWeb —{" "}
            <span className="text-transparent bg-clip-text
                             bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400
                             animate-gradient">
              Agente Web & Apps
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/80">
            Next.js + TypeScript + Tailwind. Base lista para UI moderna,
            SEO, formularios conectados y despliegues automáticos en Vercel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3
                         bg-blue-600 hover:bg-blue-500 text-white font-medium
                         transition shadow-lg shadow-blue-600/25"
            >
              Empezar ahora 🚀
            </a>
            <a
              href="https://github.com/marwinthmata2/arqweb-app"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3
                         border border-white/20 text-white/90 hover:text-white
                         hover:border-white/40 transition"
            >
              Ver repositorio ↗
            </a>
          </div>

          <p className="mt-6 text-sm text-white/50">
            Desplegado automáticamente con cada <span className="font-semibold">git push</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
