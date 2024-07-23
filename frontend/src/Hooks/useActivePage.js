import { useEffect } from 'react';

const useActivePage = () => {
  useEffect(() => {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        localStorage.setItem('activePage', this.getAttribute('href'));
      });
    });

    const activePage = localStorage.getItem('activePage');
    if (activePage) {
      links.forEach(link => {
        if (link.getAttribute('href') === activePage) {
          link.classList.add('active');
        }
      });
    }
  }, []);
};

export default useActivePage;
