import React from 'react';
import { Parallax } from 'react-parallax';
import { FaGraduationCap, FaAward, FaBook } from 'react-icons/fa';
import './About.css';
import { portfolioData } from '../../data/portfolioData';

const About = () => {
  const { education } = portfolioData;

  return (
    <Parallax
      blur={0}
      strength={100}
      renderLayer={percentage => (
        <div
          style={{
            position: 'absolute',
            background: `linear-gradient(180deg, 
              rgba(15, 23, 42, 0.95) 0%, 
              rgba(15, 23, 42, 0.98) 100%)`,
            left: '50%',
            top: 0,
            width: percentage * 200 + '%',
            height: '100%',
            transform: 'translateX(-50%)',
          }}
        />
      )}
    >
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="about-content fade-in">
            <div className="about-card glass">
              <div className="card-icon">
                <FaGraduationCap />
              </div>
              <h3>Education</h3>
              <div className="education-details">
                <h4>{education.degree}</h4>
                <p className="text-muted">Minor in {education.minor}</p>
                <p>{education.school}</p>
                <p className="text-muted">{education.location} • {education.duration}</p>
              </div>
            </div>

            <div className="about-card glass">
              <div className="card-icon">
                <FaAward />
              </div>
              <h3>Academic Excellence</h3>
              <div className="gpa-container">
                <div className="gpa-item">
                  <h4>{education.gpa}</h4>
                  <p className="text-muted">Overall GPA</p>
                </div>
                <div className="gpa-item">
                  <h4>{education.majorGPA}</h4>
                  <p className="text-muted">Major GPA</p>
                </div>
              </div>
            </div>

            <div className="about-card glass coursework-card">
              <div className="card-icon">
                <FaBook />
              </div>
              <h3>Key Coursework</h3>
              <div className="coursework-grid">
                {education.coursework.map((course, index) => (
                  <span key={index} className="coursework-item">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default About;