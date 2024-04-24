


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
