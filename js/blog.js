document.addEventListener('DOMContentLoaded', function() {
    // Controle da barra de navegação escondida ao rolar
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Scroll suave para links de navegação interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Função para animação ao rolar a página
    function setupScrollAnimations() {
        const elementsToAnimate = document.querySelectorAll('.animate');

        window.addEventListener('scroll', checkAnimation);

        function checkAnimation() {
            elementsToAnimate.forEach(element => {
                if (element.getBoundingClientRect().top < window.innerHeight) {
                    element.classList.add('visible');
                }
            });
        }
    }

    setupScrollAnimations();

    // Função para controle de cookies com js-cookie
    function setupCookieFunctions() {
        // Exemplo de criação de um cookie
        Cookies.set('nomeDoCookie', 'valorDoCookie', { expires: 7 }); // Cookie válido por 7 dias

        // Exemplo de leitura de um cookie
        let valorCookie = Cookies.get('nomeDoCookie');

        // Exemplo de exclusão de um cookie
        Cookies.remove('nomeDoCookie');
    }

    setupCookieFunctions();

    // Função para envio de formulário de newsletter
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim(); // Obtém o valor do campo e remove espaços em branco extras

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do email

        if (emailPattern.test(email)) {
            // Email válido: enviar formulário (substitua o console.log com seu código real)
            console.log('Email válido:', email);

            // Limpar campo de email após envio
            emailInput.value = '';

            // Exibir uma mensagem de sucesso ao usuário (substitua pelo seu método de feedback ao usuário)
            alert('Email assinado com sucesso!');
        } else {
            // Email inválido: exibe mensagem de erro ao usuário
            alert('Por favor, insira um email válido.');
            emailInput.focus(); // Foca no campo de email para correção
        }
    });

    // Função para realizar a função de busca
    function searchFunction() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const posts = document.querySelectorAll('.post');

        posts.forEach(post => {
            const title = post.getAttribute('data-title').toLowerCase();
            if (title.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Controle de foco ao clicar fora de elementos focados
    document.addEventListener('click', function(event) {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    });

    // Armazenamento da última página ativa usando localStorage
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            localStorage.setItem('activePage', this.getAttribute('href'));
        });
    });

    window.addEventListener('load', function() {
        const activePage = localStorage.getItem('activePage');
        if (activePage) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                if (link.getAttribute('href') === activePage) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Redirecionamento específico para a página inicial ao clicar no link do logo
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.getAttribute('href') === 'index.html') {
                event.preventDefault(); // Evita o comportamento padrão do link
                window.location.href = 'index.html'; // Redireciona para a página inicial
            }
        });
    });
});

