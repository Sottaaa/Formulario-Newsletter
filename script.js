const largura = window.innerWidth
document.documentElement.clientWidth
document.body.clientWidth;
console.log(largura)

function larg() {
    let titulo = document.getElementById('teste')
    titulo.innerHTML = largura
}

