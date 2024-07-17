import { useEffect } from 'react';

const useNewsletterForm = () => {
  useEffect(() => {
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailPattern.test(email)) {
        console.log('Email válido:', email);
        emailInput.value = '';
        alert('Email assinado com sucesso!');
      } else {
        alert('Por favor, insira um email válido.');
        emailInput.focus();
      }
    });

    return () => form.removeEventListener('submit', this);
  }, []);
};

export default useNewsletterForm;
