let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password")
let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = ""

// Pegando o valor do range e colocando na span de id "valor", além de mudar o valor do range toda vez que houver uma alteração
sizePassword.innerHTML = sliderElement.value
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    let pass = ""

    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    Toastify({
        text: "Senha copiada com sucesso!",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "rgba(51, 145, 37, 0.5)",
        }
      }).showToast();

    navigator.clipboard.writeText(novaSenha)
}