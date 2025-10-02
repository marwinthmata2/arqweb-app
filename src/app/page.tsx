export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Fondo degradado base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />

      {/* Blobs decorativos (animados) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-float [animation-delay:5s]" />
      </div>

      {/* Contenedor principal */}
      <section className="relative z-10 flex min-h-screen flex-col">
        {/* Nav */}
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-white/90">
            <span className="rounded-md bg-white/5 px-2 py-1 text-sm text-white/70 ring-1 ring-white/10">
              ArqWeb
            </span>
          </div>
          <a
            href="https://github.com/marwinthmata2/arqweb-app"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
          >
            Ver repositorio →
          </a>
        </nav>

        {/* Hero */}
        <header className="mx-auto w-full max-w-6xl px-6 pb-10 pt-4 sm:pb-16">
          <div className="max-w-3xl text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-12">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Hola Marwinth <span className="align-middle">🚀</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/80">
              Tu aplicación ya está funcionando en{" "}
              <span className="text-green-400 font-semibold">Vercel</span> ✅
            </p>

            <p className="mt-5 text-base md:text-lg text-white/70">
              Base con Next.js + TypeScript + Tailwind. Lista para construir una
              UI moderna, con buen SEO y despliegues automáticos.
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition"
              >
                Empezar ahora ✨
              </a>

              <a
                href="https://github.com/marwinthmata2/arqweb-app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition"
              >
                Ver código ↗
              </a>
            </div>
          </div>
        </header>

        {/* Features */}
        <section id="features" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <h2 className="sr-only">Características</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Next.js + TS",
                desc:
                  "Estructura app router, tipado estricto y performance por defecto.",
              },
              {
                title: "Tailwind CSS",
                desc:
                  "Estilos utilitarios, diseño responsivo y dark mode sin dolor.",
              },
              {
                title: "UI moderna",
                desc:
                  "Glassmorphism, sombras suaves, gradientes y microanimaciones.",
              },
              {
                title: "SEO listo",
                desc:
                  "Metadatos en layout, fuentes optimizadas y buenas prácticas.",
              },
              {
                title: "Deploy continuo",
                desc:
                  "Cada git push despliega automáticamente en Vercel.",
              },
              {
                title: "Escalable",
                desc:
                  "Organiza por módulos, agrega páginas y APIs cuando quieras.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/85 backdrop-blur-md hover:border-white/20 hover:bg-white/10 transition"
              >
                <div className="text-lg font-semibold text-white">{f.title}</div>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mb-16 w-full max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              ¿Listo para construir tu primera página?
            </h3>
            <p className="mt-2 text-white/80">
              Crea una nueva ruta en <code className="text-white/90">src/app/</code> y
              empieza a iterar.
            </p>
            <a
              href="#features"
              className="mt-5 inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white text-gray-900 font-medium shadow hover:opacity-90 transition"
            >
              Ver guía rápida
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-white/10/20">
          <div className="mx-auto w-full max-w-6xl px-6 py-8 text-center text-sm text-white/60">
            Desplegado automáticamente con cada <span className="font-semibold">git push</span>.
          </div>
        </footer>
      </section>
    </main>
  );
}
