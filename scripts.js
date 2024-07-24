document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar código para enviar o formulário via AJAX, se necessário
});