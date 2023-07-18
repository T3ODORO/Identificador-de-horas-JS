function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var resp = document.getElementById('resp')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 5 && hora < 12) {
        img.srcset = 'imgs/manhã.png'
        document.body.style.background = '#e2cd9f'
        resp.innerHTML = 'Bom dia'
    } else if (hora >= 13 && hora < 18) {
        img.srcset = 'imgs/tarde.png'
        document.body.style.background = '#b9846f'
        resp.innerHTML = 'Boa tarde'
    } else {
        img.srcset = 'imgs/noite.png'
        document.body.style.background = '#515154'
        resp.innerHTML = 'Boa Noite'
    }
}