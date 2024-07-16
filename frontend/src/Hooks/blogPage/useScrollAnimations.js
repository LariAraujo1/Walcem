import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.animate');
    
    const checkAnimation = () => {
      elementsToAnimate.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', checkAnimation);
    return () => window.removeEventListener('scroll', checkAnimation);
  }, []);
};

export default useScrollAnimations;
