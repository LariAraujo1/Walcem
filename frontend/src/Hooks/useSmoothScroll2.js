import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
};

export default useSmoothScroll;
