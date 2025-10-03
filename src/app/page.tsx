import Link from "next/link";

export const metadata = {
  title: "ArqWeb — Agente Web & Apps",
  description: "Sitio base con Next.js + TypeScript + Tailwind",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Bienvenido a <span className="text-pink-500">ArqWeb</span> 🚀
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Base con <span className="font-semibold">Next.js + TypeScript + Tailwind</span>. 
          Lista para construir una UI moderna, escalable y con SEO optimizado.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Link
            href="/docs"
            className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 transition font-semibold shadow-lg"
          >
            📘 Documentación
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg"
          >
            ✉️ Contáctanos
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        {[
          {
            title: "⚡ Next.js + TS",
            desc: "App Router, tipado estricto y performance por defecto.",
          },
          {
            title: "🎨 Tailwind CSS",
            desc: "Estilos rápidos, responsive y dark mode integrado.",
          },
          {
            title: "✨ UI moderna",
            desc: "Gradientes, glassmorphism y micro-animaciones.",
          },
          {
            title: "🔍 SEO listo",
            desc: "Metadatos, fuentes optimizadas y buenas prácticas.",
          },
          {
            title: "🚀 Deploy continuo",
            desc: "Cada git push se despliega en Vercel automáticamente.",
          },
          {
            title: "📈 Escalable",
            desc: "Organiza módulos, agrega páginas y APIs fácilmente.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-gray-800/70 border border-gray-700 hover:border-pink-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
