import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewsletterForm from './NewsletterForm';
import useScrollHideHeader from '../hooks/useScrollHideHeader';
import useSmoothScroll from '../hooks/useSmoothScroll';
import useScrollAnimations from '../hooks/useScrollAnimations';
import useCookieFunctions from '../hooks/useCookieFunctions';
import useNewsletterForm from '../hooks/useNewsletterForm';
import useSearch from '../hooks/useSearch';
import useFocusControl from '../hooks/useFocusControl';
import useActivePage from '../hooks/useActivePage';
import useLogoRedirection from '../hooks/useLogoRedirection';
import './styles/blog.css';
import post1 from '../assets/images/Capturar 1.png';
import post2 from '../assets/images/Capturar1 1.png';
import category1 from '../assets/images/Capturar2 1.png';
import category2 from '../assets/images/image 5.png';
import category3 from '../assets/images/image 6.png';
import category4 from '../assets/images/reciclagem-de-eletronicos.jpg';

const Blog = () => {
  useScrollHideHeader();
  useSmoothScroll();
  useScrollAnimations();
  useCookieFunctions();
  useNewsletterForm();
  useSearch();
  useFocusControl();
  useActivePage();
  useLogoRedirection();

  return (
    <div>
      <Header />
      <main className="animate__animated animate__fadeIn">
        <section className="featured-posts">
          <h2>Postagens em Destaque</h2>
          <div className="posts">
            <div className="post" data-title="PNRS: o que a lei estabelece sobre o descarte de eletrônicos?">
              <img src={post1} alt="Postagem 1" />
              <h3>PNRS: o que a lei estabelece sobre o descarte de eletrônicos?</h3>
              <p>A Política Nacional de Resíduos Sólidos (PNRS) regulamenta o manejo adequado de resíduos sólidos no Brasil, incluindo o descarte de eletrônicos...</p>
              <a href="#">Leia mais</a>
            </div>
            <div className="post" data-title="Lixo eletrônico: como descartá-lo corretamente?">
              <img src={post2} alt="Postagem 2" />
              <h3>Lixo eletrônico: como descartá-lo corretamente?</h3>
              <p>O lixo eletrônico, composto por aparelhos eletrônicos obsoletos ou quebrados, apresenta desafios ambientais significativos...</p>
              <a href="#">Leia mais</a>
            </div>
          </div>
        </section>

        <section className="categories">
          <h2>Categorias</h2>
          <div className="category" data-title="Sustentabilidade">
            <img src={category1} alt="Sustentabilidade" />
            <h3>Sustentabilidade</h3>
          </div>
          <div className="category" data-title="Reciclagem">
            <img src={category2} alt="Reciclagem" />
            <h3>Reciclagem</h3>
          </div>
          <div className="category" data-title="Impacto Ambiental">
            <img src={category3} alt="Impacto Ambiental" />
            <h3>Impacto Ambiental</h3>
          </div>
          <div className="category" data-title="Reuso de Eletrônicos">
            <img src={category4} alt="Reuso de Eletrônicos" />
            <h3>Reuso de Eletrônicos</h3>
          </div>
        </section>

        <section className="newsletter">
          <h2>Assine nossa Newsletter</h2>
          <NewsletterForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
