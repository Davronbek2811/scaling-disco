import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [language, setLanguage] = useState("ru-RU");

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Audio play failed:", e);
      }
    }
  };

  const introLine =
    language === "ru-RU"
      ? "Дамы и господа... сегодня на Бернабеу мы стали свидетелями истории."
      : language === "uz-UZ"
        ? "Xonimlar va janoblar... bugun Bernabeuda tarixga guvoh bo'ldik."
        : "Ladies and gentlemen... tonight at the Bernabéu we witnessed history.";

  return (
    <div className="relative min-h-screen overflow-hidden text-white font-[Poppins,sans-serif]">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="/media/real-madrid-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-10"></div>

      {/* 🔝 Header */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        <header className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-black/30 backdrop-blur-md p-4 rounded-xl border border-yellow-400/20 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src="/media/real-madrid-logo.png"
              alt="Real Madrid"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-yellow-300">
                {language === "ru-RU"
                  ? "Мбаппе — Эль-Класико"
                  : language === "uz-UZ"
                    ? "Mbappening El Klasikodagi muvaffaqiyati"
                    : "Mbappé — El Clásico"}
              </h1>
              <p className="text-xs text-gray-300">
                Real Madrid 4 — Barcelona 1 • Season 2025/26
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition"
            >
              {isPlaying
                ? language === "ru-RU"
                  ? "Пауза"
                  : language === "uz-UZ"
                    ? "To‘xtatish"
                    : "Pause"
                : language === "ru-RU"
                  ? "Играть гимн"
                  : language === "uz-UZ"
                    ? "Gimnni ijro etish"
                    : "Play Anthem"}
            </button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="
    relative bg-gradient-to-r from-black/70 via-black/60 to-black/70
    border border-yellow-400/50 text-yellow-300 text-sm font-semibold
    px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.2)]
    backdrop-blur-md transition-all duration-500 ease-in-out
    hover:border-yellow-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]
    hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-yellow-300/10
    active:scale-95 focus:ring-2 focus:ring-yellow-400/60 focus:border-yellow-300
    appearance-none cursor-pointer
    before:content-[''] before:absolute before:inset-0 before:rounded-full 
    before:bg-gradient-to-r before:from-yellow-300/20 before:to-transparent 
    before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 
    after:content-['▼'] after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 
    after:text-yellow-300 after:opacity-80 after:pointer-events-none
  "
            >
              <option
                value="ru-RU"
                className="
      bg-black text-yellow-300 font-medium 
      hover:bg-yellow-400/30 hover:text-white
      active:bg-yellow-400/40 transition-all duration-300
    "
              >
                Русский
              </option>

              <option
                value="uz-UZ"
                className="
      bg-black text-yellow-300 font-medium 
      hover:bg-yellow-400/30 hover:text-white
      active:bg-yellow-400/40 transition-all duration-300
    "
              >
                O'zbekcha
              </option>

              <option
                value="en-US"
                className="
      bg-black text-yellow-300 font-medium 
      hover:bg-yellow-400/30 hover:text-white
      active:bg-yellow-400/40 transition-all duration-300
    "
              >
                English
              </option>
            </select>



          </div>
        </header>

        {/* 🎬 Main */}
        <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* 📝 Left Info */}
          <div>
            <p className="uppercase text-sm text-yellow-300 font-semibold tracking-wider">
              El Clásico — Santiago Bernabéu
            </p>
            <h2 className="text-3xl sm:text-5xl font-black mt-4 text-white/95 leading-tight">
              {introLine}
            </h2>
            <p className="mt-4 text-gray-200">
              {language === "ru-RU"
                ? "Три гола. Одна незабываемая ночь. Посмотрите моменты, которые вошли в историю."
                : language === "uz-UZ"
                  ? "Uchta gol. Unutilmas kecha. Tarixga kirgan lahzalarni tomosha qiling."
                  : "Three goals. One unforgettable night. Watch the moments that turned the match into history."}
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: "Goals (RM)", value: "4" },
                { title: "Mbappé Goals", value: "3" },
                { title: "Hat-trick Header", value: "78’" },
                { title: "Bernabéu Crowd", value: "90k+" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-black/40 p-4 rounded-lg border border-yellow-400/20 text-center"
                >
                  <div className="text-2xl font-bold text-yellow-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-200">{stat.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 🖼️ Swiper */}
          <div className="rounded-2xl overflow-hidden border border-yellow-400/20 shadow-lg bg-black/30">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="h-72 sm:h-96 rounded-xl overflow-hidden"
            >
              {[
                "https://static.euronews.com/articles/stories/09/00/91/70/1200x675_cmsv2_e5e3dae4-3ab7-574b-9d11-181d92c81cee-9009170.jpg",
                "https://assets.promediateknologi.id/crop/0x0:966x693/0x0/webp/photo/p3/75/2024/04/21/Snapinstaapp_397027164_1051084476078511_4517475566604568931_n_1080-100043003.jpg",
                "https://images.supersport.com/media/yrlhvdie/el-clasico-headline-241024s.png?width=1920&quality=90&format=webp",
              ].map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Slide ${i}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </main>

        <footer className="mt-12 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} El Clásico Premium • All Rights Reserved
        </footer>
      </div>

      {/* 🎵 Audio */}
      <audio ref={audioRef} src="/media/real-anthem.mp3" preload="auto" />
    </div>
  );
}
