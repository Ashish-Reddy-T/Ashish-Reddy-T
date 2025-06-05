import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';
import { portfolioData } from '../../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillLevels = {
    'Python': 95,
    'Java': 85,
    'SQL': 80,
    'PyTorch': 90,
    'Hugging Face Transformers': 88,
    'LangChain': 85,
    'FastAPI': 87,
    'React': 75,
    'FAISS': 82,
    'Git': 90
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title fade-in">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-container fade-in">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <div key={category} className="skill-category glass">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skillList.map((skill, index) => {
                  const level = skillLevels[skill] || 75;
                  return (
                    <div
                      key={index}
                      className="skill-item"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        animationDelay: `${categoryIndex * 0.1 + index * 0.05}s`
                      }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                        {hoveredSkill === skill && skillLevels[skill] && (
                          <span className="skill-level">{level}%</span>
                        )}
                      </div>
                      {skillLevels[skill] && (
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{
                              width: inView ? `${level}%` : '0%',
                              transitionDelay: `${categoryIndex * 0.2 + index * 0.1}s`
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-visualization fade-in">
          <div className="skill-cloud">
            {Object.values(skills).flat().map((skill, index) => (
              <span 
                key={index} 
                className={`cloud-item ${hoveredSkill === skill ? 'active' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  fontSize: `${0.8 + Math.random() * 0.6}rem`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;