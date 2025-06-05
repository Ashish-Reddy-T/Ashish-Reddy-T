import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import './Hero.css';
import { portfolioData } from '../../data/portfolioData';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = portfolioData.personal.title;

  useEffect(() => {
    let index = 0;
    let timeout;

    const type = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        timeout = setTimeout(type, 100);
      } else {
        setIsTyping(false);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [fullText]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Parallax
      blur={0}
      bgImage="/hero-bg.jpg"
      bgImageAlt="hero background"
      strength={200}
      renderLayer={percentage => (
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            background: `rgba(15, 23, 42, ${0.7 + percentage * 0.2})`,
          }}
        />
      )}
    >
      <section id="home" className="hero">
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>
            <h2 className="hero-title">
              {text}
              <span className={`cursor ${!isTyping ? 'blink' : ''}`}>|</span>
            </h2>
            <p className="hero-tagline">
              {portfolioData.personal.tagline}
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="btn btn-outline"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Animated particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 20}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" onClick={scrollToNext}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;