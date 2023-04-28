function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    // var hora = 20

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 4 && hora < 12) {
        img.innerHTML = 'Bom dia!';
        document.body.style.background = '#ef9e3d'
        // img.src='tarde.png'
    }
    else if (hora <= 18) {
        img.innerHTML = 'Boa tarde!';
        document.body.style.background = '#ee5412'
    }
    else {
        img.innerHTML = 'Boa noite!';
        document.body.style.background = '#002a36'
    }
}