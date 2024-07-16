import React from 'react';
import './Footer.css'; // Assumindo que o CSS do footer esteja em um arquivo separado

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-links">
        <a href="#">Ajude a Walcem</a>
        <a href="#">Perguntas frequentes (FAQ)</a>
        <a href="#suporte">Suporte</a>
        <a href="#trabalhe-conosco">Trabalhe conosco</a>
      </div>
      <div className="contact-info">
        <h2>Informações de contato</h2>
        <p>Endereço: Rua Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
        <p>Telefone: (11) 3737-3900</p>
        <p>Email: contato@walcem.com.br</p>
      </div>
      <div className="social-media">
        <h2>Redes sociais</h2>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      </div>
    </div>
    <div className="newsletter">
      <form action="#" method="POST">
        <label htmlFor="email">Assine nossa Newsletter:</label>
        <input type="email" id="email" name="email" placeholder="Seu email" />
        <button type="submit">Assinar</button>
      </form>
    </div>
    <p className="copyright">Copyright 2024 WALCEM. Todos os direitos reservados.</p>
  </footer>
);

export default Footer;
