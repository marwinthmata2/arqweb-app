export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      {/* NAV / BADGE */}
      <div className="container mx-auto px-6 py-6">
        <div className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
          ArqWeb — Agente Web & Apps
        </div>
      </div>

      {/* HERO */}
      <section className="container mx-auto px-6 pt-8 pb-12">
        {/* blobs decorativos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Hola <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">Marwinth</span> 🚀
          </h1>
          <p className="mt-5 text-balance text-lg md:text-xl text-white/80">
            Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna, con buen SEO y despliegues automáticos en Vercel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white
                         bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500
                         shadow-lg shadow-blue-600/25 transition"
            >
              Empezar ahora ✨
            </a>
            <a
              href="https://github.com/marwinthmata2/arqweb-app"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium
                         border border-white/20 text-white/90 hover:border-white/40 transition"
            >
              Ver repositorio ↗
            </a>
          </div>
        </div>
      </section>

      {/* GRID FEATURES */}
      <section id="features" className="relative z-10 container mx-auto px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Next.js + TS",
              desc: "App Router, tipado estricto y performance por defecto."
            },
            {
              title: "Tailwind CSS",
              desc: "Estilos utilitarios, diseño responsivo y dark mode sin dolor."
            },
            {
              title: "UI Moderna",
              desc: "Glassmorphism, sombras suaves, gradientes y microanimaciones."
            },
            {
              title: "SEO listo",
              desc: "Metadatos en layout, fuentes optimizadas y buenas prácticas."
            },
            {
              title: "Deploy continuo",
              desc: "Cada git push se despliega automáticamente en Vercel."
            },
            {
              title: "Escalable",
              desc: "Organiza por módulos, agrega páginas y APIs cuando quieras."
            }
          ].map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6
                         backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* borde/halo */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                              bg-gradient-to-br from-white/10 via-white/0 to-white/10" />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-white/70">{card.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="mt-4 inline-flex text-sm text-sky-300/80 group-hover:text-sky-300 transition">
                Más información →
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative z-10 container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Listo para construir tu primera página?
          </h2>
          <p className="mt-3 text-white/75">
            Edita <code className="rounded bg-white/10 px-2 py-1">src/app/page.tsx</code> y guarda.  
            Haz <span className="font-semibold">git push</span> para desplegar en Vercel.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white
                         bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500
                         shadow-lg shadow-emerald-600/25 transition"
            >
              Ver características
            </a>
          </div>
          <p className="mt-5 text-xs text-white/50">
            Desplegado automáticamente con cada <span className="font-semibold">git push</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
