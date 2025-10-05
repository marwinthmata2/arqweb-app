export const metadata = {
  title: "ArqWeb — Agente Web & Apps",
  description:
    "Base con Next.js + TypeScript + Tailwind. Lista para construir una UI moderna, escalable y con SEO optimizado.",
};

import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {/* Header fijo arriba */}
        <Header />

        {/* Contenido principal */}
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
