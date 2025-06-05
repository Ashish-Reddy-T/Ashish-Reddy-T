// Utility functions for animations and effects

export const parallaxEffect = (element, scrolled, speed = 0.5) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  };
  
  export const fadeInOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  
  export const typeWriter = (text, callback, speed = 100) => {
    let index = 0;
    const type = () => {
      if (index < text.length) {
        callback(text.slice(0, index + 1));
        index++;
        setTimeout(type, speed);
      }
    };
    type();
  };
  
  export const smoothScroll = (targetId, offset = 80) => {
    const element = document.querySelector(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  export const magneticHover = (element, e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  
  export const resetMagneticHover = (element) => {
    element.style.transform = 'translate(0, 0)';
  };