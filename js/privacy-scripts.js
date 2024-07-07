// Controle da barra de navegação escondida ao rolar
document.addEventListener('DOMContentLoaded', function() {
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

// Validação básica de formulário de email
const form = document.querySelector('.newsletter form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function(e) {
    if (!emailInput.validity.valid) {
        e.preventDefault();
        alert('Por favor, insira um endereço de email válido.');
    }
});

// Função para validar email usando regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Exemplo de animação ao rolar a página
const elementsToAnimate = document.querySelectorAll('.animate');

window.addEventListener('scroll', checkAnimation);

function checkAnimation() {
    elementsToAnimate.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

// Exemplo simples de controle de cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

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

// Exemplo de uso:
// setCookie('visited', 'true', 30); // Define um cookie
// const visited = getCookie('visited'); // Obtém o valor do cookie

// Exemplo de envio de formulário com validação de email
document.querySelector('form').addEventListener('submit', function(event) {
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


document.addEventListener('click', function(event) {
    // Remove o foco de qualquer elemento que esteja focado
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
});
