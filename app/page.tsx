"use client";
import { useEffect, useState } from "react";
import {
  FaSpotify,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {

  const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionHeight = window.innerHeight;
    const current = Math.round(scrollY / sectionHeight) + 1;

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  const elements = document.querySelectorAll(".scroll-fade");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.25 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
  return (
    <main className="overflow-auto bg-black">
      <div className="w-[1920px] min-h-screen scale-[0.55] md:scale-100 origin-top-left">

        {/* SECTION 1 */}
        <section id="section1"
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          {/* STARS */}
          <div className="absolute top-20 left-20 text-3xl animate-pulse">✨</div>
          <div className="absolute top-40 right-32 text-2xl animate-bounce">⭐</div>
          <div className="absolute bottom-32 left-1/3 text-xl animate-ping">✦</div>

          {/* Glühwürmchen */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-70 animate-pulse blur-[2px]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-100 rounded-full opacity-60 animate-ping blur-[1px]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-yellow-200 rounded-full opacity-50 animate-pulse blur-[3px]"></div>

        

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-3xl mx-6 shadow-2xl ml-150 animate-fadeIn">
            <h1 className="text-6xl font-bold mb-6">
              Hase Schlummer
            </h1>

            <p className="text-xl leading-9">
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
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-green-500 hover:bg-green-400 hover:scale-105 transition px-8 py-4 rounded-full text-xl font-bold text-white shadow-2xl"
            >
              Jetzt auf Spotify hören
            </a>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="section2"
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background2.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          {/* STARS */}
          <div className="absolute top-24 left-24 text-2xl animate-pulse">✨</div>
          <div className="absolute bottom-40 right-40 text-xl animate-ping">✦</div>
          <div className="absolute top-1/2 left-20 text-2xl animate-bounce">🍃</div>

          {/* Glühwürmchen */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-70 animate-pulse blur-[2px]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-100 rounded-full opacity-60 animate-ping blur-[1px]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-yellow-200 rounded-full opacity-50 animate-pulse blur-[3px]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl mr-200 scroll-fade">
            <h2 className="text-5xl font-bold mb-6">
              Fips 🐿️
            </h2>

            <p className="text-xl leading-9">
            Fips ist wild, neugierig und voller verrückter Ideen.<br /><br />

            Oft bringt er sich selbst in Schwierigkeiten —
            meistens aus Versehen.<br /><br />

            Mal hängt er kopfüber an einem Ast,
            mal verirrt er sich mitten im dunklen Wald
            oder entdeckt geheimnisvolle Dinge,
            die er eigentlich lieber nicht hätte anfassen sollen.<br /><br />

            Zusammen mit Hase Schlummer erlebt Fips
            fast jeden Abend neue Abenteuer im Zauberwald und während Schlummer oft noch vorsichtig nachdenkt,
            ist Fips meistens schon längst losgerannt.<br /><br />

            Doch mit seiner lustigen Art sorgt Fips
            immer für Chaos, Abenteuer und jede Menge Lachen. ✨
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="section3"
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background3.png')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.45)]"></div>

          {/* STARS */}
          <div className="absolute top-24 right-24 text-2xl animate-pulse">✨</div>
          <div className="absolute bottom-40 left-40 text-xl animate-ping">✦</div>
          <div className="absolute top-1/2 right-20 text-2xl animate-bounce">🍂</div>

          {/* Glühwürmchen */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-70 animate-pulse blur-[2px]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-100 rounded-full opacity-60 animate-ping blur-[1px]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-yellow-200 rounded-full opacity-50 animate-pulse blur-[3px]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl ml-150 scroll-fade">
            <h2 className="text-5xl font-bold mb-6">
              Piko 🦔
            </h2>

            <p className="text-xl leading-9">
              Piko ist der ruhige Tüftler im Zauberwald.<br /><br />

              In seiner kleinen Werkstatt baut,
              repariert und erfindet er die unterschiedlichsten Dinge.<br /><br />

              Zwischen Holzspänen, Werkzeugen,
              alten Laternen und seltsamen Skizzen
              arbeitet Piko oft stundenlang an neuen Ideen.<br /><br />

              Wenn irgendwo etwas kaputtgeht,
              ein Wagen stecken bleibt
              oder plötzlich mitten im Wald
              ein seltsames Problem auftaucht,
              hat Piko meistens schon eine Idee parat.<br /><br />

              Während Fips meistens Unsinn macht
              und Schlummer langsam nervös wird,
              bleibt Piko immer gelassen.<br /><br />

              Mit Werkzeug, Holz und seinen cleveren Ideen
              findet er fast immer eine Lösung —
              auch wenn seine Pläne manchmal ein kleines bisschen verrückt sind. 🔨✨
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section id="section4"
          className="relative h-screen bg-cover bg-center flex items-start justify-center pt-16"
          style={{ backgroundImage: "url('/background4.png')" }}
        >
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.5)]"></div>

          {/* STARS */}
          <div className="absolute top-24 left-32 text-2xl animate-pulse">✨</div>
          <div className="absolute bottom-40 right-48 text-xl animate-ping">✦</div>
          <div className="absolute top-1/2 left-24 text-2xl animate-bounce">💌</div>

          {/* Glühwürmchen */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-200 rounded-full opacity-70 animate-pulse blur-[2px]"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-100 rounded-full opacity-60 animate-ping blur-[1px]"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-yellow-200 rounded-full opacity-50 animate-pulse blur-[3px]"></div>

          <div className="relative z-10 text-center text-white backdrop-blur-md bg-black/25 px-10 py-8 rounded-3xl max-w-2xl mx-6 shadow-2xl scroll-fade">
            <h2 className="text-5xl font-bold mb-6">
              Deine Meinung zählt 💌
            </h2>

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

      {/* SECTION NAV */}
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-5 bg-white/10 backdrop-blur-md px-3 py-4 rounded-full border border-white/20">

          <div
            className={`w-4 h-4 rounded-full transition duration-300 ${
              activeSection === 1
                ? "bg-yellow-200 shadow-[0_0_12px_rgba(255,255,200,0.9)]"
                : "bg-white/40"
            }`}
          />

          <div
            className={`w-4 h-4 rounded-full transition duration-300 ${
              activeSection === 2
                ? "bg-yellow-200 shadow-[0_0_12px_rgba(255,255,200,0.9)]"
                : "bg-white/40"
            }`}
          />

          <div
            className={`w-4 h-4 rounded-full transition duration-300 ${
              activeSection === 3
                ? "bg-yellow-200 shadow-[0_0_12px_rgba(255,255,200,0.9)]"
                : "bg-white/40"
            }`}
          />

          <div
            className={`w-4 h-4 rounded-full transition duration-300 ${
              activeSection === 4
                ? "bg-yellow-200 shadow-[0_0_12px_rgba(255,255,200,0.9)]"
                : "bg-white/40"
            }`}
          />

        </div>


      {/* SOCIAL BAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-6 backdrop-blur-md bg-black/40 border border-white/10 px-8 py-4 rounded-full shadow-2xl">

          <a
            href="https://open.spotify.com/show/5LG7hNPp05pUnwBzq43p4R"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-3xl hover:scale-125 transition duration-300"
          >
            <FaSpotify />
          </a>

          <a
            href="https://www.youtube.com/@HaseSchlummer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 text-3xl hover:scale-125 transition duration-300"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/haseschlummer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-3xl hover:scale-125 transition duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@hase.schlummer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:scale-125 transition duration-300"
          >
            <FaTiktok />
          </a>

        </div>
      </div>
    </main>
  );
}