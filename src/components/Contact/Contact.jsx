import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Contact.css';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For now, we'll just open the user's email client
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setFormStatus('Message sent successfully!');
    setTimeout(() => setFormStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title fade-in">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="contact-content fade-in">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities, 
              collaborations, or just having a chat about technology and innovation.
            </p>
            
            <div className="contact-details">
              <a href={`mailto:${personal.email}`} className="contact-item">
                <FaEnvelope />
                <span>{personal.email}</span>
              </a>
              <a href={`tel:${personal.phone}`} className="contact-item">
                <FaPhone />
                <span>{personal.phone}</span>
              </a>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{personal.location}</span>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="social-link"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            
            <a href="/resume.pdf" download className="btn btn-primary download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>
          
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-input"
              />
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
            
            {formStatus && (
              <p className="form-status success">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2025 Ashish Reddy Tummuri. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;