import { useEffect } from 'react';

const useHeaderScrollBehavior = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useHeaderScrollBehavior;
