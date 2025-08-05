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
    <div className="font-roboto-slab bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen w-full flex flex-col">
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-blue-400 drop-shadow-lg uppercase tracking-wide text-center break-words relative">
            <span className="relative z-10">FlashStats</span>
            <div className="absolute inset-0 text-blue-500 animate-pulse opacity-50 blur-sm">FlashStats</div>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium max-w-4xl text-center">
            The leading provider of advanced baseball data analytics, scouting, and projections for the Majors, collegiate, and amateur league teams.
          </p>
        </div>
      </header>

      <main className="w-full max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <section className="bg-transparent py-16 px-4 sm:px-6 md:px-20 text-center text-white w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Introducing <span className="text-blue-400 relative">
            <span className="relative z-10">BRAIN</span>
            <span className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">BRAIN</span>
          </span></h2>
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
              <h3 className="text-xl md:text-2xl font-bold mb-4">Take a brief tour of <span className="text-blue-400">BRAIN</span></h3>
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

        <section className="bg-transparent text-white py-16 px-4 md:px-20 text-center w-full">
          <GlobalData />
        </section>

        <section className="bg-transparent py-24 px-4 sm:px-8 md:px-20 text-white text-center w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-12 tracking-wide relative">
            <span className="relative z-10">Data Analytics</span>
            <div className="absolute inset-0 text-blue-500 animate-pulse opacity-40 blur-sm">Data Analytics</div>
          </h2>
          <div className="relative flex justify-center items-center">
            <button
              onClick={() => setIndex((prev) => (prev - 1 + players.length) % players.length)}
              className="absolute left-0 ml-4 bg-gray-700 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-200 hover:shadow-blue-400/50"
            >
              &#8592;
            </button>
            <div className="w-full max-w-4xl transition-all duration-300 ease-in-out transform">
              <div className="flex flex-col items-center bg-transparent backdrop-blur-md p-4 rounded-2xl">
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
              className="absolute right-0 mr-4 bg-gray-700 hover:bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg transition duration-200 hover:shadow-blue-400/50"
            >
              &#8594;
            </button>
          </div>
        </section>

        <section className="bg-transparent py-20 px-4 sm:px-8 md:px-20 text-white w-full">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 tracking-wide relative">
                <span className="relative z-10">Leadership Message</span>
                <div className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">Leadership Message</div>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 mx-auto mb-8 shadow-lg shadow-blue-400/50"></div>
            </div>
            
            <div className="bg-transparent rounded-2xl p-8 md:p-12 border-l-4 border-blue-400 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 opacity-10 pointer-events-none">
                <img src="/logo.png" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 relative">
                  <span className="relative z-10">Brian Cartwright</span>
                  <div className="absolute inset-0 text-blue-500 animate-pulse opacity-20 blur-sm">Brian Cartwright</div>
                </h3>
                <p className="text-lg text-gray-300 font-medium">President and Chief Data Scientist</p>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-100 leading-relaxed space-y-6">
                <p className="text-lg md:text-xl font-medium text-blue-100 italic text-center mb-8">
                  "Hello. I am Brian Cartwright, the Chief Data Scientist and President of FlashStats."
                </p>
                
                <p>
                  For the last ten years, I have been the developer of the <strong className="text-blue-400">Oliver Projections™</strong>, as featured on The Hardball Times and FanGraphs baseball websites. That experience was the springboard for an opportunity to further the value of my company as a consultant and data provider to the majority of teams in Major League Baseball over the last fifteen years. Recently, the data furnished to MLB teams has grown to include performance data for amateur players, an integral part of their draft preparation.
                </p>
                
                <p>
                  Possessing this massive database of high school, summer ball, college data, and scouting info, the company has now decided to expand its service offerings by adding web development and business management professionals through the creation of <strong className="text-blue-400">FlashStats</strong>. This new company will enable you and your staff access to the same knowledge base and to assist in your role as a college coach and recruiter.
                </p>
                
                <p>
                  We realize that you may not have all the resources of a major league team to handle the "big data" of baseball, so our goal is to create and continue the development of an interactive website that gives you the tools to <strong>1)</strong> search for the recruits who will most help your team, and <strong>2)</strong> allow you to research your upcoming opponents.
                </p>
                
                <p>
                  Not only does FlashStats offer all the publicly available statistical and scouting information for amateur players, we also leverage our expertise in state of the art baseball analysis to produce <strong className="text-blue-400">objective evaluations</strong> of players that account for level of competition, ballparks, and a player's age. This allows you to rank the players that most interest you, whether they come from high school, junior college, or the top levels of the NCAA.
                </p>
                
                <p>
                  When planning for your upcoming opponents, FlashStats can provide the insights that will give your team the edge, from <strong>spray charts and batter/pitcher matchups</strong>, to <strong>defensive and baserunning evaluations</strong>.
                </p>
                
                <p>
                  We have the stats, we have the scouting reports, and we have the experience and expertise to mold all of this into player evaluations for you. What we will not do is bury you in a maze of numbers. Our commitment is to deliver this information as a scout would. For example, if you want to see bar charts illustrating (from 20 to 80) each batter's plate discipline, contact, hitting for power, hitting for average, speed and arm, we have it!—and we're open to customization for your team while catering to your game schedule.
                </p>
                
                <p className="text-center text-lg font-semibold text-blue-400 py-4 relative border-t border-b border-blue-400/30 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent">
                  We are here to help you build you a better team...and to do so more easily.
                </p>
                
                <div className="border-t border-gray-600 pt-6 mt-8">
                  <p className="mb-4">
                    If any of our services interest you, please contact our Director of Business Development, <strong className="text-blue-400">Richard Vickroy</strong>, at <a href="tel:412-573-0100" className="text-blue-400 hover:text-blue-300 transition-colors hover:drop-shadow-sm">412.573.0100</a> or <a href="mailto:Richard.Vickroy@Flash-Stats.com" className="text-blue-400 hover:text-blue-300 transition-colors hover:drop-shadow-sm">Richard.Vickroy@Flash-Stats.com</a>
                  </p>
                  
                  <div className="text-right">
                    <p className="font-semibold">Sincerely,</p>
                    <div className="mt-4 space-y-1 flex flex-col items-end">
                      <img src="/sig.png" alt="Brian Cartwright Signature" className="h-12 mb-2 opacity-90 bg-gray-100 px-3 py-1 rounded" />
                      <p className="text-xl font-bold text-blue-400">Brian Cartwright</p>
                      <p className="text-gray-300">President and Chief Data Scientist</p>
                      <p className="text-gray-300 font-semibold">FlashStats, Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-transparent py-16 px-4 sm:px-8 md:px-20 text-center text-white w-full">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6 tracking-wide relative">
            <span className="relative z-10">Coming Soon</span>
            <div className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">Coming Soon</div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-8 opacity-30">
              <img src="/logo.png" alt="" className="w-full h-full object-contain" />
            </div>
          </h2>
          <p className="text-sm md:text-lg font-medium mb-6 max-w-3xl mx-auto">
            Introducing <span className="text-blue-400 relative">
              <span className="relative z-10">OliverProjections</span>
              <span className="absolute inset-0 text-blue-500 animate-pulse opacity-20 blur-sm">OliverProjections</span>
            </span>, a cutting-edge platform for global data analytics, empowering users with insights from leagues worldwide.
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

      <footer className="bg-gradient-to-t from-slate-200 via-blue-50 to-gray-100 text-slate-800 py-10 px-4 md:px-16 text-center w-full border-t border-blue-200/50">
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