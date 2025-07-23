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
      description:
        // "A Spencer Jones brings a rare combination of raw power and speed, posting an elite 92nd percentile exit velocity across batted ball"
        // + "events in the 2024 MiLB season. His max EV eclipsed 115.7 mph, placing him firmly among top-5% minor leaguers in pure bat speed." 
        //  + " Despite a strikeout rate north of 28%, Jones offset swing-and-miss risk with a 14% barrel rate and a sprint speed consistently over"
        //   + " 29 ft/sec, a rare dual-threat profile for a 6'7\" frame. His chase rate dropped 6 points year-over-year, signaling developing plate"
        //    + " discipline. Defensive metrics project favorably in RF/CF hybrids with a 60-grade arm and a +3 OAA equivalent in minor league "
        //    + " tracking data. at rising star Spencer Jones. With explosive power and refined technique, he's one of the most exciting young "
        //    + " players to watch in the upcoming season.",

        "..."
    },
    {
      name: "Aaron Judge",
      img: "/aaronjudge.png",
      description:
        // "Aaron Judge remains one of MLB’s most dominant offensive producers by advanced metrics. In 2023, he posted a 1.019 OPS with a wRC+ "
        // + "of 174, ranking in the top 1% league-wide. He led the league in Barrel% (26.8) and Hard Hit% (64.5) and continued to sustain an elite"
        //  + " contact-adjusted xwOBA (.463). On the defensive side, Judge registered +6 Defensive Runs Saved in RF while maintaining a 90th "
        //  + "percentile arm strength. Even at age 32, he’s defying aging curves with steady plate discipline (16.2% BB rate, 23.6% K rate) and"
        //  + " maintained a +5.2 WAR pace despite missing 48 games. He remains one of the few players who can impact the game on both sides with"
        //  + " superstar-level consistency."

        "..."
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
    <div className="font-roboto-slab bg-gray-900 text-white min-h-screen">
      {/* Header */}
     <header className="relative bg-cover bg-center h-[65vh]" style={{ backgroundImage: 'url("/bg2.jpg")' }}>
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-sm z-10">
            <img src="/logo.png" alt="FlashStats Logo" className="w-16 h-16" />
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

          <div className="flex flex-col justify-center items-center h-full px-12 md:px-24 bg-gradient-to-t from-black/90 to-black/50 rounded-lg">
            <h1 className="text-7xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg uppercase tracking-wider font-['Electrolize']">
              FlashStats
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-medium max-w-3xl text-center">
              The leading provider of advanced baseball data analytics, scouting, and projections for Major League, collegiate, and amateur league teams.
            </p>
          </div>
        </header>

        <section className="bg-gray-900 py-16 px-8 md:px-20 text-center text-white">
          <h2 className="section-title">Introducing <span className="text-yellow-400">BRAIN</span></h2>
          <p className="max-w-4xl mx-auto text-lg mb-8">
            <span className="text-4xl font-bold">B</span>aseball <span className="text-4xl font-bold">R</span>esearch <span className="text-4xl font-bold">A</span>nd <span className="text-4xl font-bold">I</span>nteractive <span className="text-4xl font-bold">N</span>exus
          </p>
          <p>
            FlashStats' flagship tool for immersive analytics, scouting insights, and performance tracking. Built to serve elite teams with unmatched precision.
          </p>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Take a look at this video for a brief tour of <span className="text-blue-800">BRAIN</span></h3>
            </div>
            <div className="flex-1">
              <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
                <iframe
                  src="https://www.youtube.com/embed/AOTAw6Wtv-o?si=yJbBjWokFE8OXX16"
                  title="YouTube video player"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      {/* Foreign Leagues Section */}
     <section className="bg-gray-800 text-white py-16 px-6 md:px-24 text-center">
        <GlobalData />
        </section>

      {/* Player Spotlight Auto Carousel */}
        <section className="bg-gray-900 py-24 px-8 md:px-20 text-white text-center">
          <h2 className="text-6xl font-bold text-yellow-400 mb-28 tracking-wide">Data Analytics</h2>
          <div className="relative flex justify-center items-center">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + players.length) % players.length)}
              className="absolute left-0 ml-4 bg-gray-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
            >
              &#8592;
            </button>
            <div className="w-[60%] transition-all duration-300 ease-in-out transform">
              <div className="flex flex-col items-center bg-gray-900 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
                <img
                  src={players[index].img}
                  alt={players[index].name}
                  className="w-[60%] h-[550px] object-contain rounded-xl shadow-lg mb-6 scale-150 mt-8 transition-transform duration-300"
                />
                <p className="text-lg font-medium text-white leading-relaxed max-w-3xl mx-auto italic">
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

      {/* Coming Soon Section */}
      <section className="bg-gray-800 py-16 px-4 md:px-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 tracking-wide">Coming Soon</h2>
        <p className="text-base md:text-lg font-medium mb-6 max-w-3xl mx-auto">
          Introducing <span className="text-yellow-400">OliverProjections</span>, a cutting-edge platform for global data analytics, empowering users with insights from leagues worldwide.
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/Uhk2b_zTPXI?autoplay=1&controls=0&loop=1&playlist=Uhk2b_zTPXI"
            title="YouTube video player"
            style={{ width: '100%', maxWidth: '600px', height: '350px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
       <div className="container pt-16">
        <Testimonials />
      </div>
      
        

     

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-800 py-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <img src="/logo.png" alt="FlashStats Logo" className="w-16 h-16" />
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
