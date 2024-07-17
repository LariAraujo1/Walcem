import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const checkAnimation = () => {
      const elementsToAnimate = document.querySelectorAll('.animate');
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
