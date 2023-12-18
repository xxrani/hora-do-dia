function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#dac69c'
        msg.innerHTML = `Bom dia! Agora são ${hora}:${min}.`
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#d1b8a4'
        msg.innerHTML = `Boa tarde! Agora são ${hora}:${min}.`
    }
    else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#172732'
        msg.innerHTML = `Boa noite! Agora são ${hora}:${min}.`
    }
}
img.addEventListener('mouseenter', entrar)
img.addEventListener('mouseout', sair)
function entrar () {
    img.classList.add('inflated')
}
function sair() {
    img.classList.remove('inflated')
}
