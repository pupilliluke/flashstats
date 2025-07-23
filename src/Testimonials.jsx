// Testimonials.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './styles/Testimonials.css';
import { Button, Container } from 'react-bootstrap';



const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="text-center mb-5">What Our Clients Say</h2>
      <div className="carousel-wrapper">
        <Carousel indicators={true} controls={false} interval={5000} pause="hover">
          <Carousel.Item>
            <div className="testimonial-card">
                <p className="testimonial-quote">"Brian Cartwright is among the leaders in the baseball analytics world. He is diligent, dependable, and thorough. He also has a com
                  prehensive outlook and goes beyond just MLB performances, as he includes minors, college, and the top international leagues. Whenever we have needed a forecasting solution, Brian
                  has always been quick to respond, and the results find their way into several articles on MLB.com. To put it plainly, Brian is one of the few on my virtual speed dial."</p>
          <h5 className="testimonial-name">Tom Tango</h5>
          <small className="testimonial-title">Senior Database Architect of Stats for MLB Advanced Media, Consultant to MLB and NHL teams, Co-author of "The Book"</small>
          </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testimonial-card">
              <p className="testimonial-quote">"I have always considered Brian Cartwright one of the top minds in the sabermetrics space. One of the true pioneers in advanced public projections with Oliver
                Projections, much of his work has served as inspiration for my own projection system. Moreover, Brian's ability to compile and aggregate data has served as an invaluable asset to my own processes
              . It's no surprise MLB clubs have courted his services in more recent years. High quality products, highly reliable, and a pleasure to work with."</p>
              <h5 className="testimonial-name">Derek Carty</h5>
              <small className="testimonial-title">Fantasy Sports Analyst -ESPN -Rotogrinders, Creator of THE BAT Daily Fantasy Baseball Projection System, Creator of THE BLITZ Daily Fantasy Football Projection System</small>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="testimonial-card">
              <p className="testimonial-quote">"Brian Cartwright and FlashStats know where to find all the numbers, they know how to put them together, and they know how to deliver them. Which is to say, in this
                newfangled era of baseball analysis, FlashStats has built their reputation the old-fashioned way: they've earned it."</p>
              <h5 className="testimonial-name">Rob Neyer</h5>
              <small className="testimonial-title">Commissioner, West Coast League</small>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;