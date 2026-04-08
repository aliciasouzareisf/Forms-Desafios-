//Desafio 1
function validarSenha() {
    const s1 = document.getElementById("senha1").value;
    const s2 = document.getElementById("senha2").value;
    const msg = document.getElementById("mensagem");

    if (s1 === s2 && s1.length >= 8) {
        msg.innerText = "Senha válida";
        msg.style.color = "green";
    } else {
        msg.innerText = "Senha inválida — mínimo 8 caracteres e iguais";
        msg.style.color = "red";
    }
}
//Desafio 2
function verificarDesconto() {
    const idade = Number(document.getElementById("idade").value);
    const estudante = document.getElementById("estudante").value;
    const mensagem = document.getElementById("msg");

    if (idade > 60 || estudante === "sim") {
        mensagem.innerText = "Tem direito ao desconto";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Sem desconto";
        mensagem.style.color = "red";
    }
}

function verificarBouncer() {
    const nome = document.getElementById("nome").value.trim();
    const idade = Number(document.getElementById("age").value);
    const msg = document.getElementById("msgBouncer");


    if (nome === "" || idade < 0) {
        msg.innerText = "Erro — nome vazio ou idade negativa";
        msg.style.color = "red";
    } else {
        msg.innerText = "Entrada permitida";
        msg.style.color = "green";
    }
}
