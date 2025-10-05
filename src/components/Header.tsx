"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/#features", label: "Características" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-400 hover:text-pink-300">
          🚀 ArqWeb
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-pink-400 font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600"
        >
          ☰
        </button>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900">
          <nav className="flex flex-col px-4 py-3 space-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded px-3 py-2 ${
                  isActive(item.href)
                    ? "bg-pink-500 text-white"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
