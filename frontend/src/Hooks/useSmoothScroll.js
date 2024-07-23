import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);
};

export default useSmoothScroll;
