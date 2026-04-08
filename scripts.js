function validar(){
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if(idade >= 16 && nivel > 5){
        mensagem.innerText = "Incrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagem.innerText = "Incrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else{
        mensagem.innerText = "Incrição negada. Idade minimo: 16 anos";
        mensagem.style.color = "red";
    }
}

function validarSenha(){
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagemDesafio1 = document.getElementById("mensagemDesafio1");

    if(senha1.length >= 8){
        if (senha1 == senha2){
        mensagemDesafio1.innerText = "Cadastro concluido";
        mensagemDesafio1.style.color = "green";
    }else {
        mensagemDesafio1.innerText = "As senhas são diferentes.";
        mensagemDesafio1.style.color = "red";
    } } else{
        mensagemDesafio1.innerText = "Senha inválida.";
        mensagemDesafio1.style.color = "red";
    }
}

function validarDesconto(){
    const idade = document.getElementById("idade").value;
    const estudante = document.getElementById("estudante").value;
    const mensagemDesafio2 = document.getElementById("mensagemDesafio2");

    if (idade > 60 || estudante === "sim"){
        mensagemDesafio2.innerText = "Você ganhou desconto especial!";
        mensagemDesafio2.style.color = "green";
    } else {
        mensagemDesafio2.innerText = "Você não tem direito ao desconto.";
        mensagemDesafio2.style.color = "red";
    }
}

function validarNomeIdade() {
    const nome = document.getElementById("nome3").value;
    const idade = document.getElementById("idade3").value;
    const mensagemDesafio3 = document.getElementById("mensagemDesafio3");
    console.log(nome);
    console.log(idade);
    if (nome.length < 1 || idade < 0) {
        mensagemDesafio3.innerText = "Nome vazio ou idade negativa";
        mensagemDesafio3.style.color = "red";
    } else {
        mensagemDesafio3.innerText = "Entrada permitida";
        mensagemDesafio3.style.color = "green";
    }
}
 




