'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; text: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    // validaciones simples en el cliente
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, text: 'Por favor completa los campos obligatorios.' });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Error al enviar el mensaje');
      }

      setStatus({ ok: true, text: '✅ Mensaje enviado con éxito.' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setStatus({ ok: false, text: err?.message || 'Ocurrió un error.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Contáctanos</h1>
      <p className="text-lg mb-8 text-center max-w-xl">
        Si tienes alguna pregunta o quieres más información sobre nuestros servicios, completa el
        formulario o escríbenos directamente.
      </p>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-md flex flex-col gap-4 bg-gray-800/50 border border-gray-700 rounded-xl p-6"
      >
        <label className="text-sm" htmlFor="name">
          Nombre <span className="text-pink-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="text-sm" htmlFor="email">
          Email <span className="text-pink-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="tucorreo@ejemplo.com"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="text-sm" htmlFor="subject">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="¿Sobre qué quieres hablar?"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="text-sm" htmlFor="message">
          Mensaje <span className="text-pink-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame tu idea o proyecto…"
          rows={5}
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 hover:bg-pink-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded mt-2"
        >
          {loading ? 'Enviando…' : 'Enviar mensaje'}
        </button>

        {status && (
          <p
            className={`text-sm mt-2 ${
              status.ok ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {status.text}
          </p>
        )}
      </form>
    </main>
  );
}
