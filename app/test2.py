export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* Dunkler Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Inhalt */}
      <div className="relative z-10 text-center text-white max-w-3xl">

        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl">
          Hase Schlummer
        </h1>

        <p className="text-xl md:text-2xl leading-relaxed mb-10 drop-shadow-lg">
          Gemütliche Gute-Nacht-Geschichten
          <br />
          zum Einschlafen 🌙
        </p>

        <a
          href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R"
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-400 transition-all duration-300 px-8 py-4 rounded-full text-xl font-semibold shadow-2xl hover:scale-105"
        >
          🎧 Jetzt auf Spotify hören
        </a>

      </div>
    </main>
  );
}