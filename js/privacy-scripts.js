document.addEventListener('DOMContentLoaded', function() {
    setupHeaderScrollBehavior();
    setupSmoothScroll();
    setupScrollAnimations();
    setupCookieFunctions();
    setupFormSubmission();

    // Função para controle da barra de navegação escondida ao rolar
    function setupHeaderScrollBehavior() {
        let lastScrollTop = 0;
        const header = document.querySelector('header');

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollTop = scrollTop;
        });
    }

    // Função para scroll suave para links de navegação interna
    function setupSmoothScroll() {
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
    }

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

    // Funções para controle de cookies
    function setupCookieFunctions() {
        // Função para definir um cookie
        function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Função para obter o valor de um cookie
        function getCookie(name) {
            const cookieName = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');
            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i];
                while (cookie.charAt(0) === ' ') {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(cookieName) === 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return "";
        }
    }

    // Função para envio de formulário com validação de email
    function setupFormSubmission() {
        document.querySelector('.newsletter form').addEventListener('submit', function(event) {
            event.preventDefault();
            let emailInput = document.getElementById('email');
            let email = emailInput.value.trim();

            if (!isValidEmail(email)) {
                alert('Por favor, insira um endereço de email válido.');
                emailInput.focus();
                return;
            }

            // Aqui você pode enviar o formulário, por exemplo:
            // this.submit();
        });

        // Função para validar email usando regex
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
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
