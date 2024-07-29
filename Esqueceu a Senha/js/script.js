document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInfo = document.getElementById('user-info').value;
    if (userInfo) {
        showNotification(`Um link de login foi enviado para ${userInfo}`);
    } else {
        showNotification('Por favor, insira um email, telefone ou nome de usuário.', true);
    }
});

function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = isError ? '#f44336' : '#4CAF50';
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
