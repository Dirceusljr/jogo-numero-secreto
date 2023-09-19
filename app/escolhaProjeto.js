var botao = document.getElementById("btn")
var body = document.querySelector("body")

botao.addEventListener('click', () => {
    mudarProjeto ()
})

function mudarProjeto () {
    if (body.classList.contains("alura")) {
        return body.classList.replace("alura", "dirceu")
    }
    else { 
        return body.classList.replace("dirceu", "alura")}
}