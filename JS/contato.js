document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por entrar em contato! Responderemos em breve.');
    this.reset();
});
