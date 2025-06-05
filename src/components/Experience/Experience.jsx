import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';
import { portfolioData } from '../../data/portfolioData';

const Experience = () => {
  const { experience, certifications } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title fade-in">
          Work <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="timeline fade-in">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content glass">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <div className="experience-meta">
                  <span>
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  <span>
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                </div>
                <ul className="experience-highlights">
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title fade-in">
          Certifications & <span className="gradient-text">Courses</span>
        </h3>
        
        <div className="certifications-grid fade-in">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card glass">
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
              <span className="cert-period">{cert.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;