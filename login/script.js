document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // pegar email e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Fazer validações
    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Enviar os dados do formulário
    console.log("Email:", email);
    console.log("Senha:", password);
    
    // para outra página
    alert("Login bem-sucedido!");
});
