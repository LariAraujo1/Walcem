import { useEffect } from 'react';

const useLogoRedirection = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        if (this.getAttribute('href') === 'index.html') {
          event.preventDefault();
          window.location.href = 'index.html';
        }
      });
    });
  }, []);
};

export default useLogoRedirection;
