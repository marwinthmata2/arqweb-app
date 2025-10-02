export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">
        Hola Marwinth 🚀
      </h1>
      <p className="text-lg mb-6">
        Tu aplicación ya está funcionando en
        <span className="text-green-400 font-semibold">Vercel ✅</span>
      </p>
      <a
        href="#"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition"
      >
        Ir a la próxima página →
      </a>
    </main>
  );
}
