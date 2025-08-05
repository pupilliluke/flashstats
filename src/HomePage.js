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
    <div className="font-roboto-slab bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Dark Screen Animation */}
      <div 
        className="fixed inset-0 bg-black pointer-events-none z-20"
        style={{
          animation: 'darkScreenFade 8000ms ease-in-out forwards'
        }}
      ></div>
      
      {/* Video Lightning Animation */}
      <video 
        className="fixed inset-0 w-full h-full object-cover pointer-events-none z-10 transition-opacity duration-1000"
        style={{ opacity: 0 }}
        autoPlay 
        muted 
        playsInline
        onLoadedData={(e) => {
          const video = e.target;
          video.currentTime = 0;
          setTimeout(() => {
            video.play();
            // Fade in
            setTimeout(() => {
              video.style.opacity = '0.3';
            }, 100);
            // Fade out after 3 seconds
            setTimeout(() => {
              video.style.opacity = '0';
              setTimeout(() => {
                video.pause();
                video.style.display = 'none';
              }, 1000);
            }, 3000);
          }, 2000);
        }}
      >
        <source src="/boltanimation.mp4" type="video/mp4" />
      </video>
      
      {/* Header - Fluent Design Spacing */}
      <header className="relative bg-cover bg-center h-[65vh] w-full overflow-hidden" style={{ backgroundImage: 'url("/bg2.jpg")' }}>
        {/* Dark overlay - positioned absolutely to cover only the header */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50"></div>
        
        <div className="absolute top-0 left-0 w-full text-sm z-10" style={{ padding: '16px 32px' }}>
          <div className="flex justify-between items-start w-full">
            <img src="/logo2.png" alt="FlashStats Logo" className="w-12 h-12" />
            <div className="flex flex-col items-end text-right" style={{ gap: '4px' }}>
              <span className="flex items-center justify-end" style={{ gap: '4px' }}>
                <Mail className="w-4 h-4" />
                <span className="hidden md:inline">info@Flash-Stats.com</span>
              </span>
              <span className="flex items-center justify-end" style={{ gap: '4px' }}>
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">800-842-5769</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full z-10" style={{ padding: '32px' }}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-blue-400 drop-shadow-lg uppercase tracking-wide text-center break-words relative">
            <span className="relative z-10">
<span className="lightning-letter">F</span><span style={{fontFamily: "'SF TransRobotics', 'Impact', 'Arial Black', sans-serif"}}>lash</span><img src="/bolt.png" alt="S" className="inline-block h-[1.6em] w-auto" style={{verticalAlign: '-30%'}} /><span style={{fontFamily: "'SF TransRobotics', 'Impact', 'Arial Black', sans-serif"}}>tats</span>
            </span>
          </h1>
          <p className="font-medium max-w-4xl text-center text-xl sm:text-2xl md:text-3xl" style={{ marginTop: '24px' }}>
            The leading provider of advanced baseball data analytics, scouting, and projections for the Majors, collegiate, and amateur league teams.
          </p>
        </div>
      </header>

      <main className="w-full max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <section className="bg-transparent text-center text-white w-full" style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ marginBottom: '16px' }}>Introducing <span className="text-blue-400 relative">
              <span className="relative z-10">BRAIN</span>
              <span className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">BRAIN</span>
            </span></h2>
            <p className="text-sm sm:text-base md:text-lg max-w-5xl mx-auto" style={{ marginBottom: '16px' }}>
              <span className="text-md md:text-3xl font-bold">B</span>aseball
              <span className="text-md md:text-3xl font-bold"> R</span>esearch
              <span className="text-md md:text-3xl font-bold"> A</span>nd
              <span className="text-md md:text-3xl font-bold"> I</span>nteractive
              <span className="text-md md:text-3xl font-bold"> N</span>exus
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto" style={{ marginBottom: '32px' }}>
              FlashStats' flagship tool for immersive analytics, scouting insights, and performance tracking. Built to serve elite teams with unmatched precision.
            </p>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center" style={{ gap: '32px' }}>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold" style={{ marginBottom: '16px' }}>Take a brief tour of <span className="text-blue-400">BRAIN</span></h3>
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
          </div>
        </section>

        <section className="bg-transparent text-white text-center w-full" style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-screen-xl mx-auto">
            <GlobalData />
          </div>
        </section>

        <section className="bg-transparent text-white text-center w-full" style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-400 tracking-wide relative" style={{ marginBottom: '48px' }}>
              <span className="relative z-10">Data Analytics</span>
              <div className="absolute inset-0 text-blue-500 animate-pulse opacity-40 blur-sm">Data Analytics</div>
            </h2>
            <div className="relative flex justify-center items-center">
              <button
                onClick={() => setIndex((prev) => (prev - 1 + players.length) % players.length)}
                className="absolute left-0 bg-gray-700 hover:bg-blue-500 text-white rounded-full shadow-lg transition duration-200 hover:shadow-blue-400/50"
                style={{ marginLeft: '16px', padding: '16px' }}
              >
                &#8592;
              </button>
              <div className="w-full max-w-4xl transition-all duration-300 ease-in-out transform">
                <div className="flex flex-col items-center bg-transparent backdrop-blur-md rounded-2xl" style={{ padding: '16px' }}>
                  <img
                    src={players[index].img}
                    alt={players[index].name}
                    className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-300"
                    style={{ marginBottom: '16px' }}
                  />
                  <p className="text-base md:text-lg font-medium text-white leading-relaxed max-w-3xl mx-auto italic">
                    {players[index].description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % players.length)}
                className="absolute right-0 bg-gray-700 hover:bg-blue-500 text-white rounded-full shadow-lg transition duration-200 hover:shadow-blue-400/50"
                style={{ marginRight: '16px', padding: '16px' }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </section>

        <section className="bg-transparent text-white w-full" style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center" style={{ marginBottom: '48px' }}>
              <h2 className="text-3xl md:text-5xl font-bold text-blue-400 tracking-wide relative" style={{ marginBottom: '16px' }}>
                <span className="relative z-10">Leadership Message</span>
                <div className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">Leadership Message</div>
              </h2>
              <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 mx-auto shadow-lg shadow-blue-400/50" style={{ width: '96px', height: '4px', marginBottom: '32px' }}></div>
            </div>
            
            <div className="bg-transparent rounded-2xl border-l-4 border-blue-400 relative overflow-hidden" style={{ padding: '48px' }}>
              <div className="absolute opacity-10 pointer-events-none" style={{ top: '16px', right: '16px', width: '64px', height: '64px' }}>
                <img src="/logo2.png" alt="" className="w-full h-full object-contain" />
              </div>
              <div className="text-center" style={{ marginBottom: '32px' }}>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-400 relative" style={{ marginBottom: '8px' }}>
                  <span className="relative z-10">Brian Cartwright</span>
                  <div className="absolute inset-0 text-blue-500 animate-pulse opacity-20 blur-sm">Brian Cartwright</div>
                </h3>
                <p className="text-lg text-gray-300 font-medium">President and Chief Data Scientist</p>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-100 leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p className="text-lg md:text-xl font-medium text-blue-100 italic text-center" style={{ marginBottom: '32px' }}>
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

        <section className="bg-transparent text-center text-white w-full" style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-400 tracking-wide relative" style={{ marginBottom: '24px' }}>
              <span className="relative z-10">Coming Soon</span>
              <div className="absolute inset-0 text-blue-500 animate-pulse opacity-30 blur-sm">Coming Soon</div>
              <div className="absolute transform -translate-x-1/2 opacity-30" style={{ top: '-4px', left: '50%', width: '32px', height: '32px' }}>
                <img src="/logo2.png" alt="" className="w-full h-full object-contain" />
              </div>
            </h2>
            <p className="text-sm md:text-lg font-medium max-w-3xl mx-auto" style={{ marginBottom: '24px' }}>
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
          </div>
        </section>

        <section className="bg-transparent text-white w-full" style={{ paddingTop: '64px', paddingBottom: '64px', paddingLeft: '32px', paddingRight: '32px' }}>
          <div className="max-w-6xl mx-auto">
            <Testimonials />
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-t from-slate-200 via-blue-50 to-gray-100 text-slate-800 text-center w-full border-t border-blue-200/50" style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center" style={{ gap: '16px' }}>
          <img src="/logo2.png" alt="FlashStats Logo" className="w-16 h-16" />
          <div className="flex items-center text-sm" style={{ gap: '24px' }}>
            <span className="flex items-center" style={{ gap: '4px' }}><Phone className="w-4 h-4" /> 800-842-5769</span>
            <span className="flex items-center" style={{ gap: '4px' }}><Mail className="w-4 h-4" /> info@Flash-Stats.com</span>
          </div>
          <p className="text-xs" style={{ marginTop: '16px' }}>Copyright &copy; 2025 FlashStats. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;