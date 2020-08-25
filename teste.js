let info = []
var resposta = document.querySelector('div#res')
var ano = new Date().getFullYear()

function adcicionar(){
    let infor =  {}

    var nome = document.getElementById('nome')
    var anonas = document.querySelector('input#idade')
    var idade = ano - Number(anonas.value)

    if (nome.value == '' || anonas.value == '' || anonas.value>ano){
        window.alert('ERRO! Dados inválidos.')
        nome.value = ''
        anonas.value = ''
        nome.focus()
    }else{
        resposta.innerHTML = ``
        var sexo = (document.getElementById('mas').checked)? 'Masculino':'Feminino'
    
    

    
    infor['nome']=nome.value
    
    infor['idade']=idade
    
    infor['sexo']=sexo
    
    var opp = document.createElement('option')
    opp.value = `pessoa ${info.length}`

    opp.innerHTML = `${info.length+1} - ${infor.nome}, ${infor.idade} anos, sexo ${infor.sexo}`

    document.getElementById('lista').appendChild(opp)
    info.push(infor)

    nome.value = ''
    nome.focus()
    }
    
    

    

}



function fim(){

    if (info.length ==0){
        window.alert('ERRO! Cadastre pessoas para finalizar')
    }

    else if (resposta.innerHTML == ''){
    var mais_velho 
    var mais_novo 
    var média = 0
    var num_homens = 0
    var num_mulheres = 0

    

    for(let c in info){
    
        if (info[0]==info[c]){
            
            mais_velho = {nome:info[c].nome,idade:info[c].idade}
            
            mais_novo = {nome:info[c].nome,idade:info[c].idade}
        
        }else if(info[c].idade>mais_velho.idade){
            
            mais_velho = {nome:info[c].nome,idade:info[c].idade}
       
        }else if (info[c].idade<mais_novo.idade){
            
            mais_novo = {nome:info[c].nome,idade:info[c].idade}
        }

        if (info[c].sexo=='Masculino'){
            num_homens += 1
        }else{
            num_mulheres += 1
        }
    
        média += info[c].idade
    }
    resposta.innerHTML += `<p>Foram cadastradas ${info.length} pessoas </p>`
    resposta.innerHTML += `<p>A pessoa mais velha é ${mais_velho.nome}, que possui ${mais_velho.idade} anos.</p>`
    resposta.innerHTML += `<p>A pessoa mais nova é ${mais_novo.nome}, que possui ${mais_novo.idade} anos.</p>`
    resposta.innerHTML += `<p>A média de idades das pessoas cadstradas é de ${(média/info.length).toFixed
    (2)} anos.</p>`
    resposta.innerHTML += `<p>Foram cadastrados ${num_homens} homem(s) e ${num_mulheres} mulher(s).</p>`
    
    }
    
    
}

function video(){
    if (document.getElementById('lugar').innerHTML == ''){var viddeo = document.createElement('video')
    viddeo.src = 'videoplayback.mp4' 
    viddeo.width = 500
    viddeo.controls = true
    viddeo.preload = 'metadata'
    viddeo.poster = 'noite-300.jpg'
    document.getElementById('lugar').appendChild(viddeo)}
    
}
