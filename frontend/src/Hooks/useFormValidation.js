import { useEffect } from 'react';

const useFormValidation = () => {
  useEffect(() => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();

      if (!isValidEmail(email)) {
        alert('Por favor, insira um endereço de email válido.');
        emailInput.focus();
        return;
      }

      // Aqui você pode enviar o formulário, por exemplo:
      // event.target.submit();
    };

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const form = document.querySelector('.newsletter form');
    form.addEventListener('submit', handleFormSubmit);

    return () => form.removeEventListener('submit', handleFormSubmit);
  }, []);
};

export default useFormValidation;
