


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
