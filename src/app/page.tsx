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
      
      {/* 🚨 Bloque de prueba para Tailwind */}
      <div className="bg-pink-500 text-white p-6 rounded-xl text-center">
        Tailwind funcionando 💅
      </div>

      {/* Fondos decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-[float_12s_ease_infinite]" />
        <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-[float_10s_ease_infinite]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
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
            Base con Next.js + TypeScript + Tailwind. L
