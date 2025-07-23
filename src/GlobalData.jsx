import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Testimonials.css';
import { Button, Container } from 'react-bootstrap';



const GlobalData = () => {
  return (
    <>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-yellow-400 mb-10 text-center">Global Data Coverage</h2>
        <div className="max-w-5xl mx-auto space-y-8">
          <Carousel className="custom-carousel" indicators={true} controls={true} interval={5000} pause="hover">
            <Carousel.Item>
              <section>
                <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">Foreign Leagues</h2>
                <div className="space-y-8">
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
                    <h3 className="text-xl font-semibold text-blue-400">and more...</h3>
                  </div>
                 
                </div>
              </section>
            </Carousel.Item>

            <Carousel.Item>
            <section className="bg-gray-900 text-white py-16 px-6 md:px-24 text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-10">Collegiate Baseball</h2>
                <div className="max-w-5xl mx-auto space-y-8 text-left">
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">NCAA (USA)</h3>
                    <p>Top-tier college baseball featuring powerhouse conferences like the SEC, ACC, and Big 12 that routinely produce MLB talent. Includes DII, DIII, and NAIA levels. </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Cape Cod League</h3>
                    <p>Elite summer league for top college players, heavily scouted by MLB organizations and known for using wood bats.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Northwoods League</h3>
                    <p>A prominent collegiate summer league providing extensive at-bats and innings to players developing for the pros.</p>
                </div>
                </div>
            </section>
            </Carousel.Item>

            <Carousel.Item>
            <section className="bg-gray-900 text-white py-16 px-6 md:px-24 text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-10">High School Baseball</h2>
                <div className="max-w-5xl mx-auto space-y-8 text-left">
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Perfect Game Showcase</h3>
                    <p>The top high school showcase league in the U.S., featuring elite-level prospects and national exposure to MLB scouts.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Area Code Games</h3>
                    <p>Premier summer scouting event bringing together top players from across the country to compete in front of scouts.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Prep Baseball Report (PBR)</h3>
                    <p>A major platform for high school talent discovery, with events, rankings, and scouting across all 50 states.</p>
                </div>
                </div>
            </section>
            </Carousel.Item>

            <Carousel.Item>
            <section className="bg-gray-900 text-white py-16 px-6 md:px-24 text-center">
                <h2 className="text-3xl font-bold text-yellow-400 mb-10">Amateur & International Development</h2>
                <div className="max-w-5xl mx-auto space-y-8 text-left">
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Korean Futures League</h3>
                    <p>South Korea’s minor league system for KBO-affiliated clubs. A vital stepping stone for developing local talent.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Dominican Summer League (DSL)</h3>
                    <p>MLB-affiliated league for international signees, especially from Latin America, offering early development experience.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-blue-400">Australian Baseball League (ABL)</h3>
                    <p>A professional winter league that offers playing opportunities to developing athletes during the MLB offseason.</p>
                </div>
                </div>
            </section>
            </Carousel.Item>

            </Carousel>
          </div>
        </div>
    </>
  );
};

export default GlobalData;

