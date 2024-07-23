import { useEffect } from 'react';

const useSearch = () => {
  useEffect(() => {
    const searchButton = document.getElementById('search-button');
    const searchFunction = () => {
      const searchTerm = document.getElementById('search-input').value.toLowerCase();
      const posts = document.querySelectorAll('.post');
      posts.forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase();
        post.style.display = title.includes(searchTerm) ? 'block' : 'none';
      });
    };
    searchButton.addEventListener('click', searchFunction);
    return () => searchButton.removeEventListener('click', searchFunction);
  }, []);
};

export default useSearch;
