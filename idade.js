function clicar(){
    ano = Number(document.querySelector('input#ano').value)
    
    anoAtual = new Date().getFullYear()
    
    var ver = document.querySelector('div#res')
    
    sexo = document.getElementsByName('sex')


    var pic = document.createElement('img')
    pic.setAttribute('id','foto')
    

    if(ano<1900 || ano>anoAtual){
        window.alert('ERRO! Verifique os dados e tente novamente')
    }
    else{
        
        var idade = anoAtual-ano
        
        var genero = ''
        
        if (sexo[0].checked){
            genero+='um Homem'

            if(idade>0 && idade<10){
                //criança
                pic.setAttribute('src','img/boy.png')
            }
            else if(idade<21){
                //jovem
                pic.setAttribute('src','img/youngman.png')
            }
            else if(idade<50){
                //adulto
                pic.setAttribute('src','img/man.png')
            }
            else{
                //velho
                pic.setAttribute('src','img/oldman.png')
            }
        }
        else{
            genero+='uma Mulher'

            if(idade>0 && idade<10){
                //criança
                pic.setAttribute('src','img/girl.png')
            }
            else if(idade<21){
                //jovem
                pic.setAttribute('src','img/youngwoman.png')
            }
            else if(idade<50){
                //adulto
                pic.setAttribute('src','img/woman.png')
            }
            else{
                //velho
                pic.setAttribute('src','img/oldwoman.png')
            }
        }
        
        ver.style.textAlign = 'center'
        
        ver.innerHTML = `Detetamos ${genero} de ${idade} anos.`

        ver.appendChild(pic)

    }
}