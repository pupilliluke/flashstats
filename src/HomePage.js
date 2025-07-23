import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const HomePage = () => {
  const players = [
    {
      name: "Spencer Jones",
      img: "/spencerjones.png",
      description:
        "A look at rising star Spencer Jones. With explosive power and refined technique, he's one of the most exciting young players to watch in the upcoming season."
    },
    {
      name: "Aaron Judge",
      img: "/aaronjudge.png",
      description:
        "Aaron Judge is a dominant force in Major League Baseball. Known for his towering home runs and leadership, he's a key figure in modern baseball."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % players.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [players.length]);

  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: 'url("/bg2.jpg")' }}>
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-sm z-10">
          <img src="/flash-logo.png" alt="FlashStats Logo" className="w-16 h-16" />
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4" /> <span>info@Flash-Stats.com</span>
            <Phone className="w-4 h-4" /> <span>800-842-5769</span>
            <div className="flex gap-2">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start h-full px-12 md:px-24 bg-gradient-to-t from-black/80 to-transparent">
          <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg">
            BRAIN <span className="text-white font-light">is the</span>
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-bold">
            <span className="text-yellow-400">B</span>aseball <span className="text-yellow-400">R</span>esearch <span className="text-yellow-400">A</span>nd
            <br />
            <span className="text-yellow-400">I</span>nteractive <span className="text-yellow-400">N</span>exus
          </p>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white text-black py-12 px-8 md:px-20 text-center">
        <p className="max-w-4xl mx-auto text-lg">
          <span className="italic font-semibold">FlashStats</span> is a big data baseball provider that has been servicing the
          majority of Major League Baseball teams for fifteen years. We are excited and proud to be expanding our reach into the
          collegiate and amateur marketplace across the United States.
        </p>
      </section>

      {/* Foreign Leagues Section */}
      <section className="bg-gray-900 text-white py-16 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">Global Baseball Leagues</h2>
        <div className="max-w-5xl mx-auto space-y-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-blue-400">NPB – Nippon Professional Baseball (Japan)</h3>
            <p>Japan’s top-tier league known for its strong fundamentals, elite pitching, and deeply rooted fan culture. Divided into the Central and Pacific Leagues.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">KBO – Korea Baseball Organization (South Korea)</h3>
            <p>Popular for its high-scoring games and exciting bat flips. KBO emphasizes offense and passionate home crowds.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">CPBL – Chinese Professional Baseball League (Taiwan)</h3>
            <p>Known for its colorful fan experience and entertaining style of play, the CPBL continues to grow in competitiveness and visibility.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">LIDOM – Liga de Béisbol Profesional de la República Dominicana</h3>
            <p>The premier Dominican Winter League where many MLB stars play during the offseason. It's known for its intensity and loud, energetic games.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Mexican League (LMB)</h3>
            <p>Mexico’s top professional league, considered Triple-A level, with a long history and a blend of power and finesse.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Cuban National Series</h3>
            <p>Historic and talent-rich league producing numerous elite players, though now diminished in visibility due to player defections and politics.</p>
          </div>
        </div>
      </section>

      {/* Player Spotlight Auto Carousel */}
      <section className="bg-gray-800 py-16 px-8 md:px-20 text-white text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">Player Spotlight</h2>
        <div className="flex gap-36 overflow-x-auto px-4 justify-center">
          {players.map((player, idx) => (
            <div key={idx} className="min-w-[400px] max-w-[400px] flex flex-col items-center">
              <img
                src={player.img}
                alt={player.name}
                className="w-full h-[550px] object-contain rounded-xl shadow-lg mb-4 scale-125 mt-12"
              />
              <p className="text-lg font-medium text-white leading-relaxed">
                {player.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white text-gray-800 py-16 px-6 md:px-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="text-xl italic max-w-4xl mx-auto">
          “Brian Cartwright and FlashStats know where to find all the numbers, they know how to put them together, and they know how to deliver them.
          Which is to say, in this newfangled era of baseball analysis, FlashStats has built their reputation the old-fashioned way: they’ve earned it.”
          <footer className="mt-6 text-base font-semibold">– Rob Neyer<br /><span className="text-sm font-normal">Commissioner, West Coast League</span></footer>
        </blockquote>
      </section>

      {/* Video Tour Section */}
      <section className="bg-yellow-500 py-12 px-8 md:px-20 text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Take a look at the video below for a brief tour of <span className="text-blue-800">BRAIN</span></h2>
          </div>
          <div className="flex-1">
            <img src="/video-preview.png" alt="Video Preview" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <img src="/flash-logo.png" alt="FlashStats Logo" className="w-16 h-16" />
          <div className="flex gap-6 items-center text-sm">
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> 800-842-5769</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> info@Flash-Stats.com</span>
            <div className="flex gap-3 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <p className="text-xs mt-4">Copyright &copy; 2025 FlashStats. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
