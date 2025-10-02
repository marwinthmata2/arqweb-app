export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Fondo decorativo con blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/40 via-sky-400/40 to-emerald-400/40 blur-3xl animate-float" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-purple-400/30 to-blue-400/30 blur-3xl animate-float [animation-delay:6s]" />
      </div>

      {/* Contenido principal */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Hola <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">Marwinth 🚀</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-gray-300">
          Base con <b>Next.js + TypeScript + Tailwind</b>. Lista para construir una UI moderna,
          con buen SEO y despliegues automáticos en Vercel.
        </p>

        {/* Botones */}
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg shadow-blue-600/30"
          >
            Empezar ahora ✨
          </a>
          <a
            href="https://github.com/marwinthmata2/arqweb-app"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 transition text-white font-medium backdrop-blur-md"
          >
            Ver repositorio ↗
          </a>
        </div>

        {/* Grid de características */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {[
            { title: "Next.js + TS", desc: "App Router, tipado estricto y performance por defecto." },
            { title: "Tailwind CSS", desc: "Estilos utilitarios, diseño responsivo y dark mode." },
            { title: "UI moderna", desc: "Glassmorphism, sombras suaves y microanimaciones." },
            { title: "SEO listo", desc: "Metadatos en layout, fuentes optimizadas y buenas prácticas." },
            { title: "Deploy continuo", desc: "Cada git push despliega automáticamente en Vercel." },
            { title: "Escalable", desc: "Organiza módulos, agrega páginas y APIs fácilmente." },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition shadow-xl"
            >
              <h3 className="text-xl font-se
