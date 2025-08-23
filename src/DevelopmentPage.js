import React, { useState } from 'react';
import './fonts.css';

const DevelopmentPage = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleImageClick = (imageSrc) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };
  return (
    <div className="font-roboto-slab bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white min-h-screen w-full">
      <div className="container mx-auto px-8 py-16">
        <div className="text-center mb-8">
          <a 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go to Homepage
          </a>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 tracking-wide relative mb-8">
            <span className="relative z-10">Research</span>
            <div className="absolute inset-0 text-blue-500 animate-pulse opacity-40 blur-sm">Research</div>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced player statistics and analytics available for all leagues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <div className="text-center mb-6">
              <img 
                src="/experiments/battercard.png" 
                alt="Player Performance Analytics" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => handleImageClick('/experiments/battercard.png')}
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3 text-center">Player Performance Cards</h3>
            <p className="text-gray-300 text-center">
              Complete player profiles with season stats and percentile rankings across key offensive metrics compared to league averages.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <div className="relative text-center mb-6">
              <div className="carousel-container relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{transform: `translateX(-${carouselIndex * 100}%)`}}>
                  <div className="w-full flex-shrink-0">
                    <img 
                      src="/experiments/battercardA.png" 
                      alt="Heat Map Analytics" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => handleImageClick('/experiments/battercardA.png')}
                    />
                  </div>
                  <div className="w-full flex-shrink-0">
                    <img 
                      src="/experiments/battercardAAA.png" 
                      alt="Predictive Models" 
                      className="w-full max-w-sm mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={() => handleImageClick('/experiments/battercardAAA.png')}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                <button 
                  className={`w-3 h-3 rounded-full transition-opacity duration-200 ${carouselIndex === 0 ? 'bg-green-400 opacity-100' : 'bg-gray-400 opacity-60 hover:opacity-100'}`}
                  onClick={() => setCarouselIndex(0)}
                ></button>
                <button 
                  className={`w-3 h-3 rounded-full transition-opacity duration-200 ${carouselIndex === 1 ? 'bg-purple-400 opacity-100' : 'bg-gray-400 opacity-60 hover:opacity-100'}`}
                  onClick={() => setCarouselIndex(1)}
                ></button>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-400 mb-3 text-center">Batting Splits Analysis</h3>
            <p className="text-gray-300 text-center">
              Detailed performance breakdowns vs RHP/LHP with pitch-by-pitch analytics, color-coded metrics, and advanced situational statistics.
            </p>
          </div>

        </div>

        {/* Detailed Features Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-400 text-center mb-12">Coming Soon</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Interactive Data Visualization Section */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Interactive Data Visualization
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-blue-400">
                  <h4 className="text-xl font-semibold mb-3">Player Performance Charts</h4>
                  <p className="text-gray-300">
                    Real-time batting averages, ERA trends, and fielding statistics with interactive hover effects. Track performance over time with detailed breakdowns by situation, opponent, and field conditions.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-green-400">
                  <h4 className="text-xl font-semibold mb-3">Heat Maps</h4>
                  <p className="text-gray-300">
                    Strike zone analysis and field positioning heat maps for strategic insights. Visualize hitting patterns, pitch locations, and defensive positioning with color-coded intensity maps.
                  </p>
                </div>
              </div>
            </section>

            {/* Advanced Analytics Dashboard Section */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Advanced Analytics Dashboard
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-purple-400">
                  <h4 className="text-xl font-semibold mb-3">Predictive Models</h4>
                  <p className="text-gray-300">
                    Expert led projections for player performance and scouting. Extended research on current and historical data to predict player outcomes and identify trends.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-yellow-400">
                  <h4 className="text-xl font-semibold mb-3">Real-time Metrics</h4>
                  <p className="text-gray-300">
                    Live game statistics, pitch velocity tracking, and situational analytics. Get instant updates on player performance with context-aware metrics and game state analysis.
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Forms & Controls Section */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Interactive Forms & Controls
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-red-400">
                  <h4 className="text-xl font-semibold mb-3">Advanced Filters</h4>
                  <p className="text-gray-300">
                    Multi-layered filtering system for player search, team comparison, and statistical analysis. Filter by date ranges, opponents, game situations, weather conditions, and more.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-teal-400">
                  <h4 className="text-xl font-semibold mb-3">Data Export Tools</h4>
                  <p className="text-gray-300">
                    Custom report generation with PDF, Excel, and CSV export capabilities. Create professional reports with charts, tables, and custom branding for presentations and analysis.
                  </p>
                </div>
              </div>
            </section>

            {/* Exclusive API Access Section */}
            <section className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Exclusive API Access
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-orange-400">
                  <h4 className="text-xl font-semibold mb-3">Premium Data Endpoints</h4>
                  <p className="text-gray-300">
                    Direct access to proprietary MLB scouting data, minor league analytics, and draft projections. Get the same data used by professional scouts and front offices.
                  </p>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-6 border-l-4 border-pink-400">
                  <h4 className="text-xl font-semibold mb-3">Custom Integration Tools</h4>
                  <p className="text-gray-300">
                    White-label API solutions for teams and organizations requiring seamless data integration. Build custom applications with FlashStats data seamlessly integrated.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 p-8 bg-slate-800/30 rounded-2xl border border-blue-400/10">
          <p className="text-lg text-gray-400">
            These data visualization tools are available for all leagues and skill levels.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Comprehensive analytics for MLB, Minor League, College, and High School baseball.
          </p>
        </div>
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
          onClick={closeExpandedImage}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={expandedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={closeExpandedImage}
              className="absolute top-4 right-4 text-black bg-white bg-opacity-80 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopmentPage;