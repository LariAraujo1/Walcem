document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulação de login
    if (email === 'usuario@exemplo.com' && password === 'senha123') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais incorretas, tente novamente.');
    }
});
    