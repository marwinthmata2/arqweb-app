export default function Home() {
  const features = [
    {
      title: "Next.js + TS",
      desc: "App Router, tipado estricto y performance por defecto.",
    },
    {
      title: "Tailwind CSS",
      desc: "Estilos utilitarios, diseño responsivo y dark mode sin dolor.",
    },
    {
      title: "UI moderna",
      desc: "Glassmorphism, sombras suaves, gradientes y microanimaciones.",
    },
    {
      title: "SEO listo",
      desc: "Metadatos en layout, fuentes optimizadas y buenas prácticas.",
    },
    {
      title: "Deploy continuo",
      desc: "Cada git push se despliega automáticamente en Vercel.",
    },
    {
      title: "Escalable",
      desc: "Organiza por módulos, agrega páginas y APIs cuando quieras.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-[float_12s_ease_infinite]" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-[float_10s_ease_infinite]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ✅ Bloque de PRUEBA de Tailwind (quitar luego) */}
        <div className="mb-6 rounded-xl bg-pink-500 p-6 text-center text-white shadow-lg">
          Tailwind funcionando 💅 (bloque de prueba)
        </div>

        {/* Badge superior */}
        <div className="mx-auto w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          ArqWeb — Agente Web & Apps
        </div>

        {/* Hero */}
        <header className="mx-auto mt-6 max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hola{" "}
            <span className="text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text animate-[gradient-x_12s_ease_infinite]">
              Marwinth
            </span>{" "}
            🚀
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna,
            con buen SEO y despliegues automáticos en Vercel.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Empezar ahora ✨
            </a>
            <a
              href="https://github.com/marwinthmata2/arqweb-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-white/90 transition hover:border-white/40"
            >
              Ver repositorio ↗
            </a>
          </div>
        </header>

        {/* Grid de tarjetas */}
        <section className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)] backdrop-blur transition hover:border-white/20"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/75">{f.desc}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200"
              >
                Más información →
              </a>
            </div>
          ))}
        </section>
      </div>

      {/* Animaciones clave (gradiente y flotación) */}
      <style jsx global>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-[gradient-x_12s_ease_infinite] {
          background-size: 200% 200%;
          animation: gradient-x 12s ease infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </main>
  );
}
