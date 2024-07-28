document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Tab") {
                event.preventDefault();
                const nextInput = inputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                } else {
                    inputs[0].focus(); 
                }
            }
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Requisição enviada com sucesso!");
    });
});

//  icones
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
});
