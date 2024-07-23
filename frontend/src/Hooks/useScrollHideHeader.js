import { useEffect } from 'react';

const useScrollHideHeader = () => {
  useEffect(() => {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
};

export default useScrollHideHeader;
