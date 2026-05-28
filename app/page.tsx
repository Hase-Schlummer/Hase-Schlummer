import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">

      {/* SECTION 1 */}
      <section
        className="relative min-h-screen bg-cover bg-[28%_center] md:bg-center flex items-start justify-center pt-6 md:pt-16 px-4"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

        <div className="absolute top-20 left-20 text-3xl animate-pulse">✨</div>
        <div className="absolute top-40 right-32 text-2xl animate-bounce">⭐</div>
        <div className="absolute bottom-32 left-1/3 text-xl animate-ping">✦</div>

        <div className="flex flex-col items-center relative z-10 w-full">
          <div className="text-center text-white backdrop-blur-md bg-black/25 px-5 md:px-10 py-6 md:py-8 rounded-3xl w-full max-w-[92vw] md:max-w-3xl mx-0 md:mx-6 shadow-2xl ml-0 md:ml-150 animate-fadeIn hover:scale-[1.02] transition duration-500">

            <h1 className="text-4xl md:text-6xl font-bold mb-5 md:mb-6">
              Hase Schlummer
            </h1>

            <p className="text-base md:text-xl leading-7 md:leading-9">
              Willkommen im Traumland von Hase Schlummer. 🌙
              <br /><br />

              Wenn der Abend leise wird und die Sterne am Himmel funkeln,<br />
              beginnt für Hase Schlummer ein neues Abenteuer.<br />

              Gemeinsam mit seinen Freunden Fips und Piko erlebt er
              lustige und chaotische Geschichten tief im Zauberwald.<br />

              <br />
              🌲 Eine kleine Welt zum Träumen.<br /><br />

              Der Zauberwald ist voller geheimer Orte.<br />

              Hier erleben Schlummer und seine Freunde Abenteuer voller Fantasie, Freundschaft und Wärme — fern vom hektischen Alltag.<br /><br />

              Lehn dich zurück, hör den Geschichten zu und lass dich ins Traumland begleiten. ✨
            </p>

            <a
              href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R"
              target="_blank"
              className="inline-block mt-6 md:mt-8 bg-green-500 hover:bg-green-400 hover:scale-105 transition px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold text-white shadow-2xl"
            >
              Jetzt auf Spotify hören
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="relative min-h-screen bg-cover bg-[58%_center] md:bg-center flex items-start justify-center pt-6 md:pt-16 px-4"
        style={{ backgroundImage: "url('/background2.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

        <div className="absolute top-24 left-24 text-2xl animate-pulse">✨</div>
        <div className="absolute bottom-40 right-40 text-xl animate-ping">✦</div>
        <div className="absolute top-1/2 left-20 text-2xl animate-bounce">🍃</div>

        <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-5 md:px-10 py-6 md:py-8 rounded-3xl w-full max-w-[92vw] md:max-w-2xl mx-0 md:mx-6 shadow-2xl mr-0 md:mr-200 animate-fadeIn hover:scale-[1.02] transition duration-500">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            Fips 🐿️
          </h2>

          <p className="text-base md:text-xl leading-7 md:leading-9">
            Fips ist wild, neugierig und voller verrückter Ideen.<br /><br />
            Oft bringt er sich selbst in Schwierigkeiten —
            meistens aus Versehen.<br /><br />
            Mal hängt er kopfüber an einem Ast,
            mal verirrt er sich mitten im dunklen Wald
            oder entdeckt geheimnisvolle Dinge,
            die er eigentlich lieber nicht hätte anfassen sollen.<br /><br />
            Doch mit seiner lustigen Art sorgt Fips
            immer für Chaos, Abenteuer und jede Menge Lachen. ✨
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section
        className="relative min-h-screen bg-cover bg-[52%_center] md:bg-center flex items-start justify-center pt-6 md:pt-16 px-4"
        style={{ backgroundImage: "url('/background3.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

        <div className="absolute top-24 right-24 text-2xl animate-pulse">✨</div>
        <div className="absolute bottom-40 left-40 text-xl animate-ping">✦</div>
        <div className="absolute top-1/2 right-20 text-2xl animate-bounce">🍂</div>

        <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-5 md:px-10 py-6 md:py-8 rounded-3xl w-full max-w-[92vw] md:max-w-2xl mx-0 md:mx-6 shadow-2xl ml-0 md:ml-150 animate-fadeIn hover:scale-[1.02] transition duration-500">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6">
            Piko 🦔
          </h2>

          <p className="text-base md:text-xl leading-7 md:leading-9">
            Piko ist der ruhige Tüftler im Zauberwald.<br /><br />
            In seiner kleinen Werkstatt baut,
            repariert und erfindet er die unterschiedlichsten Dinge.<br /><br />
            Während Fips meistens Unsinn macht
            und Schlummer langsam nervös wird,
            bleibt Piko immer gelassen.<br /><br />
            Mit Werkzeug, Holz und seinen cleveren Ideen
            findet er fast immer eine Lösung —
            auch wenn seine Pläne manchmal ein kleines bisschen verrückt sind. 🔨✨
          </p>
        </div>
      </section>

      {/* SOCIAL BAR */}
      <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-5 md:gap-6 backdrop-blur-md bg-black/40 border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl">

          <a href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R" target="_blank" className="text-green-400 text-2xl md:text-3xl hover:scale-125 transition duration-300">
            <FaSpotify />
          </a>

          <a href="https://www.youtube.com/@HaseSchlummer" target="_blank" className="text-red-500 text-2xl md:text-3xl hover:scale-125 transition duration-300">
            <FaYoutube />
          </a>

          <a href="https://www.instagram.com/haseschlummer/" target="_blank" className="text-pink-400 text-2xl md:text-3xl hover:scale-125 transition duration-300">
            <FaInstagram />
          </a>

          <a href="https://www.tiktok.com/@hase.schlummer" target="_blank" className="text-white text-2xl md:text-3xl hover:scale-125 transition duration-300">
            <FaTiktok />
          </a>

        </div>
      </div>

    </main>
  );
}