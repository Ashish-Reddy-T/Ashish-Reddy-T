import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import './Projects.css';
import { portfolioData } from '../../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <Parallax
      blur={0}
      strength={50}
      renderLayer={percentage => (
        <div
          style={{
            position: 'absolute',
            background: `radial-gradient(circle at ${50 + percentage * 20}% 50%, 
              rgba(59, 130, 246, 0.05) 0%, 
              transparent 50%)`,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}
    >
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="filter-buttons fade-in">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            {['Python', 'FastAPI', 'PyTorch', 'LoRA'].map(tech => (
              <button
                key={tech}
                className={`filter-btn ${filter === tech ? 'active' : ''}`}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="projects-grid fade-in">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card glass ${project.featured ? 'featured' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  {project.status && (
                    <span className={`status-badge ${project.status.replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <p key={index} className="highlight-item">• {highlight}</p>
                  ))}
                </div>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                      <FaPlay /> Demo
                    </a>
                  )}
                  <button 
                    className="project-link details-btn"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  >
                    <FaExternalLinkAlt /> Details
                  </button>
                </div>
                
                <div className={`project-overlay ${selectedProject === project.id ? 'visible' : ''}`}>
                  <div className="overlay-content">
                    <button 
                      className="close-overlay"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close details"
                    >
                      ×
                    </button>
                    <h4>Key Features</h4>
                    <ul>
                      {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Projects;