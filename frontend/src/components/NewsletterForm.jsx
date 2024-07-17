import React from 'react';

const NewsletterForm = () => (
  <form id="newsletterForm">
    <input type="email" id="email" placeholder="Seu email" required />
    <button type="submit">Assinar</button>
  </form>
);

export default NewsletterForm;
