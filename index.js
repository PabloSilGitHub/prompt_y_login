
//declarando las constantes que se tomarán del documento html
const username = document.getElementById('username');
const passwordUser = document.getElementById('password');
const submit = document.getElementById('submit');

//añadiendo evento cuando se haga clic en el botón de envio del formulario
submit.addEventListener('click', function() {
    if (username.value == "Pablo" && passwordUser.value == "Silvestre" || username.value == "Alberto" && passwordUser.value == "Calderon") {
        window.location.href = "../Prompt/index.html"
    } else {
        alert("datos incorrectos")
    }
})

