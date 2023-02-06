const usuario = 'admin'
const senha = '1234'

let formulario = document.querySelector('form')
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let username = formulario.querySelector("#username").value
    let pass = formulario.querySelector("#pass").value

    if(username === usuario && pass === senha){
        window.sessionStorage.setItem("logado_sucesso", 'true')
        window.location = "index.html"
        
    }else{
        window.sessionStorage.setItem("logado_sucesso", 'false')
        alert("Senha ou usuario invalidos")
    }
})