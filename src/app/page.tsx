import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "ArqWeb — Agente Web & Apps",
  description:
    "Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna, escalable y con SEO optimizado.",
};

export default function Home() {
  const features = [
    { title: "Next.js + TS", desc: "App Router, tipado estricto y performance por defecto." },
    { title: "Tailwind CSS", desc: "Estilos utilitarios, diseño responsive y dark mode integrado." },
    { title: "UI moderna", desc: "Gradientes, glassmorphism y micro-animaciones." },
    { title: "SEO listo", desc: "Metadatos en layout, fuentes optimizadas y buenas prácticas." },
    { title: "Deploy continuo", desc: "Cada git push se despliega en Vercel automáticamente." },
    { title: "Escalable", desc: "Organiza por módulos, agrega páginas y APIs fácilmente." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100">
      {/* Hero */}
      <section className="text-center space-y-6 pt-20 pb-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Bienvenido a <span className="text-pink-500">ArqWeb</span> 🚀
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Base con <span className="font-semibold">Next.js</span> +{" "}
          <span className="font-semibold">TypeScript</span> +{" "}
          <span className="font-semibold">Tailwind</span>, lista para construir una UI
          moderna, escalable y con SEO optimizado.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="#docs"
            className="px-6 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 transition shadow-md"
          >
            📘 Documentación
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-md"
          >
            📩 Contáctanos
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-xl bg-gray-900/50 p-6 border border-white/10 shadow-sm"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p className="text-gray-300 mb-6">
          ¿Tienes una idea o proyecto? Envíame un mensaje y te responderé lo antes posible.
        </p>

        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Marwinth Mata. Todos los derechos reservados.
      </footer>
    </main>
  );
}
