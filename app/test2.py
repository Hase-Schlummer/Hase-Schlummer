import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-auto bg-black">
      <div className="w-[1920px] min-h-screen">

        {/* SECTION 1 */}
        <section
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-3xl mx-6 shadow-2xl ml-150">
            <h1 className="text-6xl font-bold mb-6">Hase Schlummer</h1>

            <p className="text-xl leading-9">
              Willkommen im Traumland von Hase Schlummer. 🌙
              <br /><br />
              Wenn der Abend leise wird und die Sterne am Himmel funkeln,<br />
              beginnt für Hase Schlummer ein neues Abenteuer.
              <br /><br />
              Gemeinsam mit seinen Freunden Fips und Piko erlebt er
              lustige und chaotische Geschichten tief im Zauberwald.
              <br /><br />
              🌲 Eine kleine Welt zum Träumen.
              <br /><br />
              Lehn dich zurück, hör den Geschichten zu und lass dich ins Traumland begleiten. ✨
            </p>

            <a
              href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-500 hover:bg-green-400 hover:scale-105 transition px-8 py-4 rounded-full text-xl font-bold text-white shadow-2xl"
            >
              Jetzt auf Spotify hören
            </a>
          </div>
        </section>

        {/* SECTION 2 */}
        <section
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background2.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl mr-200">
            <h2 className="text-5xl font-bold mb-6">Fips 🐿️</h2>

            <p className="text-xl leading-9">
              Fips ist wild, neugierig und voller verrückter Ideen.
              <br /><br />
              Oft bringt er sich selbst in Schwierigkeiten —
              meistens aus Versehen.
              <br /><br />
              Doch mit seiner lustigen Art sorgt Fips
              immer für Chaos, Abenteuer und jede Menge Lachen. ✨
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background3.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl ml-150">
            <h2 className="text-5xl font-bold mb-6">Piko 🦔</h2>

            <p className="text-xl leading-9">
              Piko ist der ruhige Tüftler im Zauberwald.
              <br /><br />
              In seiner kleinen Werkstatt baut, repariert und erfindet er
              die unterschiedlichsten Dinge.
              <br /><br />
              Mit Werkzeug, Holz und seinen cleveren Ideen findet er fast immer eine Lösung. 🔨✨
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background4.png')" }}
        >
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.5)]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">Deine Meinung zählt 💌</h2>

            <p className="text-xl leading-9">
              Hase Schlummer wächst mit jeder Geschichte weiter.
              <br /><br />
              Deshalb freuen wir uns über Feedback, Kritik,
              Ideen und liebe Nachrichten von kleinen und großen Zuhörern.
              <br /><br />
              Was gefällt dir besonders gut?<br />
              Welche Abenteuer wünschst du dir noch?<br />
              Und was können wir vielleicht noch besser machen?
              <br /><br />
              Wenn du uns etwas schreiben möchtest,
              kannst du uns jederzeit eine E-Mail an
              hase.schlummer@web.de senden. 🌙
              <br /><br />
              Jede Nachricht hilft uns dabei,
              die Welt von Hase Schlummer noch schöner,
              gemütlicher und fantasievoller zu gestalten. ✨
            </p>

            <a
              href="mailto:hase.schlummer@web.de?subject=Feedback zu Hase Schlummer"
              className="inline-block mt-8 bg-yellow-500 hover:bg-yellow-400 hover:scale-105 transition px-8 py-4 rounded-full text-xl font-bold text-white shadow-2xl"
            >
              Feedback per E-Mail senden
            </a>
          </div>
        </section>

      </div>

      {/* SOCIAL BAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 backdrop-blur-md bg-black/40 border border-white/10 px-8 py-4 rounded-full shadow-2xl">
          <a href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R" target="_blank" rel="noopener noreferrer" className="text-green-400 text-3xl hover:scale-125 transition duration-300">
            <FaSpotify />
          </a>

          <a href="https://www.youtube.com/@HaseSchlummer" target="_blank" rel="noopener noreferrer" className="text-red-500 text-3xl hover:scale-125 transition duration-300">
            <FaYoutube />
          </a>

          <a href="https://www.instagram.com/haseschlummer/" target="_blank" rel="noopener noreferrer" className="text-pink-400 text-3xl hover:scale-125 transition duration-300">
            <FaInstagram />
          </a>

          <a href="https://www.tiktok.com/@hase.schlummer" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:scale-125 transition duration-300">
            <FaTiktok />
          </a>
        </div>
      </div>
    </main>
  );
}