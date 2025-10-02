export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Degradado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900" />

      {/* Blobs decorativos */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-float"
        style={{ animationDelay: "5s" }}
      />

      {/* Contenido */}
      <section className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-3xl w-full text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            ArqWeb{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 animate-gradient">
              — Agente Web & Apps
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-white/80">
            Base con Next.js + TypeScript + Tailwind. Lista para construir una
            UI moderna, con buen SEO y despliegues automáticos en Vercel.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium transition shadow-lg shadow-blue-600/25"
            >
              Empezar ahora ✨
            </a>

            <a
              href="https://github.com/marwinthmata2/arqweb-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition"
            >
              Ver repositorio ↗
            </a>
          </div>

          {/* Grid de features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              {
                title: "Next.js + TS",
                desc:
                  "App Router, tipado estricto y performance por defecto.",
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
                  "Cada git push se despliega automáticamente en Vercel.",
              },
              {
                title: "Escalable",
                desc:
                  "Organiza por módulos, agrega páginas y APIs cuando quieras.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-white/50">
            Desplegado automáticamente con cada <span className="font-semibold">git push</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
