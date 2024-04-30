


function verificar() {
 var idade = document.getElementById("Sim");
    if (idade.checked){
        window.location.href = "pages/homepage.html";
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que você não tem a idade necessária para entrar",
          });
    }

}


var usuario = "1234"
var senha = "1234"
function logar(){
    var login = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (login == usuario && pass == senha){
        Swal.fire({
            icon: "success",
            title: "Parabéns",
            text: "Você entrou na sua conta!",
            timer:  1500
        })
        setTimeout(function() {
            window.location.href = "homepage.html";
        }, 3000);
    }

    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Parece que você errou sua conta!",
            timer: 1500
          });
    }
}

    function problema(){
        Swal.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Seu problema já nos foi enviado!",
            timer: 1500
          });
    }


    function mandar(){
        var preço = parseFloat(document.getElementById("produto").innerText)
        var qtd = document.getElementById("quantidade").value

        var result = preço * qtd
        document.getElementById("produto").innerText = result.toFixed(2)

    }

    function carrin() {
        Swal.fire({
            title: "Sucesso!",
            text: "Seu item foi adicionado ao carrinho",
            timer: 1500
          });

    }
var certo = 'FIAP2024'
function cupom() {
    var cupom = document.getElementById("cupom").value;
    var preco = document.getElementById("produto").innerText;
    var precoFloat = parseFloat(preco);
    
    if (cupom === certo) {
        var desconto = precoFloat * 0.10;
        var precoComDesconto = precoFloat - desconto;
        
        document.getElementById("produto").innerText = precoComDesconto.toFixed(2);
        Swal.fire("Cupom aplicado!", "Você obteve 10% de desconto!", "success");
    } else {
        Swal.fire("Cupom inválido!", "Por favor, insira um cupom válido.", "error");
    }
}
