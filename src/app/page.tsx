import Link from "next/link";

export const metadata = {
  title: "ArqWeb — Agente Web & Apps",
  description:
    "Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna, con buen SEO y despliegues automáticos en Vercel.",
};

export default function Home() {
  const features = [
    { title: "Next.js + TS", desc: "App Router, tipado estricto y performance por defecto." },
    { title: "Tailwind CSS", desc: "Estilos utilitarios, diseño responsivo y dark mode sin dolor." },
    { title: "UI moderna", desc: "Glassmorphism, sombras suaves, gradientes y microanimaciones." },
    { title: "SEO listo", desc: "Metadatos en layout, fuentes optimizadas y buenas prácticas." },
    { title: "Deploy continuo", desc: "Cada git push se despliega automáticamente en Vercel." },
    { title: "Escalable", desc: "Organiza por módulos, agrega páginas y APIs cuando quieras." },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Fondos simples (sin animaciones para mantenerlo estable) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Badge superior */}
        <div className="mx-auto w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          ArqWeb — Agente Web & Apps
        </div>

        {/* Hero */}
        <header className="mx-auto mt-6 max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Hola Marwinth 🚀</h1>
          <p className="mt-4 text-lg text-white/80">
            Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna,
            con buen SEO y despliegues automáticos en Vercel.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {/* Interno → usa Link para evitar el error de ESLint */}
            <Link
              href="/twcheck"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Empezar ahora ✨
            </Link>

            {/* Externo → <a> normal */}
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
              <Link
                href="/test"
                className="mt-4 inline-flex items-center text-sm font-medium text-sky-300 hover:text-sky-200"
              >
                Más información →
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
