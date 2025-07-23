import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import Testimonials from './Testimonials';
import GlobalData from './GlobalData';

const HomePage = () => {
  const players = [
    {
      name: "Spencer Jones",
      img: "/spencerjones.png",
      description: "..."
    },
    {
      name: "Aaron Judge",
      img: "/aaronjudge.png",
      description: "..."
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
    <div className="font-roboto-slab bg-gray-900 text-white min-h-screen w-full flex flex-col">
      {/* Header */}
      <header className="relative bg-cover bg-center h-[65vh] w-full" style={{ backgroundImage: 'url("/bg2.jpg")' }}>
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 sm:p-6 text-sm z-10 max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <img src="/logo.png" alt="FlashStats Logo" className="w-12 h-12" />
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">info@Flash-Stats.com</span>
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">800-842-5769</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full px-4 sm:px-12 md:px-24 bg-gradient-to-t from-black/90 to-black/50">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-yellow-400 drop-shadow-lg uppercase tracking-wide text-center break-words">
            FlashStats
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium max-w-4xl text-center">
            The leading provider of advanced baseball data analytics, scouting, and projections for the Majors, collegiate, and amateur league teams.
          </p>
        </div>
      </header>

      <main className="w-full max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <section className="bg-gray-900 py-16 px-4 sm:px-6 md:px-20 text-center text-white w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Introducing <span className="text-yellow-400">BRAIN</span></h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 max-w-5xl mx-auto">
            <span className="text-md md:text-3xl font-bold">B</span>aseball
            <span className="text-md md:text-3xl font-bold"> R</span>esearch
            <span className="text-md md:text-3xl font-bold"> A</span>nd
            <span className="text-md md:text-3xl font-bold"> I</span>nteractive
            <span className="text-md md:text-3xl font-bold"> N</span>exus
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto">
            FlashStats' flagship tool for immersive analytics, scouting insights, and performance tracking. Built to serve elite teams with unmatched precision.
          </p>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Take a brief tour of <span className="text-blue-800">BRAIN</span></h3>
            </div>
            <div className="flex-1">
              <div className="w-full aspect-video mx-auto rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/AOTAw6Wtv-o?controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-16 px-4 md:px-20 text-center w-full">
          <GlobalData />
        </section>

        <section className="bg-gray-900 py-24 px-4 sm:px-8 md:px-20 text-white text-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-12 tracking-wide">Data Analytics</h2>
          <div className="relative flex justify-center items-center">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + players.length) % players.length)}
              className="absolute left-0 ml-4 bg-gray-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
            >
              &#8592;
            </button>
            <div className="w-full max-w-4xl transition-all duration-300 ease-in-out transform">
              <div className="flex flex-col items-center bg-gray-900 backdrop-blur-md p-4 rounded-2xl shadow-2xl">
                <img
                  src={players[index].img}
                  alt={players[index].name}
                  className="w-full h-auto object-contain rounded-xl shadow-lg mb-4 transition-transform duration-300"
                />
                <p className="text-base md:text-lg font-medium text-white leading-relaxed max-w-3xl mx-auto italic">
                  {players[index].description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % players.length)}
              className="absolute right-0 mr-4 bg-gray-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
            >
              &#8594;
            </button>
          </div>
        </section>

        <section className="bg-gray-800 py-16 px-4 sm:px-8 md:px-20 text-center text-white w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 mb-6 tracking-wide">Coming Soon</h2>
          <p className="text-sm md:text-lg font-medium mb-6 max-w-3xl mx-auto">
            Introducing <span className="text-yellow-400">OliverProjections</span>, a cutting-edge platform for global data analytics, empowering users with insights from leagues worldwide.
          </p>
          <div className="relative w-full max-w-4xl aspect-video mx-auto rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Uhk2b_zTPXI?autoplay=1&controls=0&loop=1&playlist=Uhk2b_zTPXI"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </section>

<div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 xl:px-20 pt-16 mx-auto">
          <Testimonials />
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-800 py-10 px-4 md:px-16 text-center w-full">
        <div className="max-w-6xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex flex-col items-center gap-4">
          <img src="/logo.png" alt="FlashStats Logo" className="w-16 h-16" />
          <div className="flex gap-6 items-center text-sm">
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> 800-842-5769</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> info@Flash-Stats.com</span>
          </div>
          <p className="text-xs mt-4">Copyright &copy; 2025 FlashStats. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;