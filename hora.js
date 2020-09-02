function carregar(){
    var men = document.getElementById('msg')
    var pic = document.getElementById('imgg')
    bom = document.getElementById('bo')
    var data = new Date()
    var hora = data.getHours()
    var min =  data.getMinutes()
    

    men.innerHTML = `Agora são ${hora}:${min} horas`
    

    if(hora<12 && hora>=0){
        //Bom dia
        pic.src = 'manhã250.png'
        document.body.style.background = '#fb8b37'
        bom.innerHTML = 'Bom dia'
    }
    else if(hora<18){
        //Boa tarde
        pic.src = 'tarde250.png'
        document.body.style.background = '#bebabb'
        bom.innerHTML = 'Boa tarde'
    }
    else{
        //Boa noite
        pic.src = 'noite250.png'
        document.body.style.background = '#051931'
        bom.innerHTML = 'Boa noite'
    }
}


