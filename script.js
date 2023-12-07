function exibirMensagem() {
    var nome = document.getElementById("nomeInput").value;
    var mensagemDiv = document.getElementById("mensagem");
    
    if (nome === "") {
        mensagemDiv.innerHTML = "Por favor, insira seu nome.";
    } else {
        mensagemDiv.innerHTML = "Bem-vindo, " + nome + "!";
        localStorage.setItem('mensagem', "Bem-vindo, " + nome + "!");
    }
}

window.onload = function() {
    var mensagemArmazenada = localStorage.getItem('mensagem');
    if (mensagemArmazenada) {
        document.getElementById("mensagem").innerHTML = mensagemArmazenada;
    }
}
