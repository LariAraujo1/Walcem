document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('descarteForm');
    const cepInput = document.getElementById('cep');
    const distanciaSelect = document.getElementById('distancia');
    const porteSelect = document.getElementById('porte');
    const produtoSelect = document.getElementById('produto');
    const submitButton = form.querySelector('button[type="submit"]');

    const formElements = [cepInput, distanciaSelect, porteSelect, produtoSelect, submitButton];

    formElements.forEach((element, index) => {
        element.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                event.preventDefault();
                formElements[(index + 1) % formElements.length].focus();
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});
