// src/app/page.tsx
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Fondos suaves / blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-float" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-float [animation-delay:5s]" />
      </div>

      {/* Contenido */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            ArqWeb — Agente Web & Apps
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Hola Marwinth <span className="align-[2px]">🚀</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/80 md:text-xl">
            Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna,
            con buen SEO y despliegues automáticos en Vercel.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 active:scale-[0.98]"
            >
              Empezar ahora
            </a>

            <a
              href="https://github.com/marwinthmata2/arqweb-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-medium text-white/90 hover:border-white/40 transition"
            >
              Ver repositorio ↗
            </a>
          </div>

          {/* Features */}
          <div id="features" className="mx-auto mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Next.js + TS',
                desc: 'App Router, tipado estricto y performance por defecto.',
              },
              {
                title: 'Tailwind CSS',
                desc: 'Estilos utilitarios, diseño responsivo y dark mode sin dolor.',
              },
              {
                title: 'UI moderna',
                desc: 'Glassmorphism, sombras suaves, gradientes y microanimaciones.',
              },
              {
                title: 'SEO listo',
                desc: 'Metadatos en layout, fuentes optimizadas y buenas prácticas.',
              },
              {
                title: 'Deploy continuo',
                desc: 'Cada git push se despliega automáticamente en Vercel.',
              },
              {
                title: 'Escalable',
                desc: 'Organiza por módulos, agrega páginas y APIs cuando quieras.',
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/60">
            Desplegado automáticamente con cada <span className="font-semibold">git push</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
