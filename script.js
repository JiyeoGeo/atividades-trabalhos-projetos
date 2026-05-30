//1. Botão com mensagem
function mostrarMensagem(){
    alert("Bem vindo!")
}

// 2. Alteração na tela
document.getElementById("alterarMensagem").innerHTML = "Texto antigo"
function alterarMensagem(){
    document.getElementById("alterarMensagem").innerHTML = "Texto novo"
}

// 3. Verificação de idade (condicional)
function verificar(){
        let idade = document.getElementById("entrada").value;
        if(idade >= 18){
          document.getElementById("psaida").innerText = "Maior de idade";
        }
        else{
          document.getElementById("psaida").innerText = "Menor de idade";
        }
}

// 4. Contador com laço
function exibirNumeros(){
    let saida = "";
    for(let contador = 0; contador <= 10; contador++){
        saida += contador + " ";
    }
    document.getElementById("saida").innerText = saida;
}

// 5. Sistema simples de notas
function Sistema(){
        let nota = document.getElementById("entrada").value;
        if(nota >= 6){
          document.getElementById("dsaida").innerText = "Aprovado";
        }
        else{
          document.getElementById("dsaida").innerText = "Reprovado";
        }
}
