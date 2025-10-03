export const metadata = {
  title: "ArqWeb",
  description: "Base con Next.js + TS + Tailwind",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  );
}
