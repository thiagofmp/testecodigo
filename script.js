document.getElementById('meuBotao').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = "Você clicou no botão!";
    this.style.backgroundColor = '#28a745'; // Muda a cor do botão para verde
    });
    
    document.getElementById('entradaTexto').addEventListener('input', function() {
        var texto = this.value;
        document.getElementById('textoAlterado').innerText = texto;
    });
    
    document.getElementById('meuLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previne a navegação padrão
    document.getElementById('linkMensagem').innerText = "Você clicou no link!";
    });
    