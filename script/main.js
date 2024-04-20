var resp = document.getElementsByClassName('respostas')
const tela = document.getElementById('container-quest')
const pergunta = document.getElementById('pergunta')
const contador = document.getElementById('contador')
const layoutRespostas = document.getElementById('respContainer')
const respLayout = document.getElementById('respLayout')
const botãoReturn = document.getElementById('retornar')
const numUsados = []
var contadorPerg = 0
var numeros = Array.from({length: 25}, (_, i) => i + 1);
var numAleatorio = numeros.slice(0, 4);
var numPergunta;
var respostaCerta;
var respAcertadas = 0;
var respErradas = 0;

document.addEventListener("DOMContentLoaded", function() {
    jogar();
});

function embaralharNumeros() {
    for (let i = numeros.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
    }

    numAleatorio = numeros.slice(0, 4);
    
    
    for(let j = 0; j <numUsados.length; j++ ){
        if(numUsados.find(numPergunta => numUsados))
        numPergunta = data[0]['perguntas'][numAleatorio[Math.floor(Math.random()* resp.length + 1)]]
    } 
    numPergunta = data[0]['perguntas'][numAleatorio[Math.floor(Math.random()* resp.length)]]
    
    numUsados.push(numPergunta)
    console.log(numUsados)

}
function jogar(){
    contadorPerg++;
    if (contadorPerg <= 10) {
        contador.innerHTML = `Pergunta: ${contadorPerg}/10`;
        embaralharNumeros();
        gerarResposta();
        gerarPergunta();
    }else{
    
    contadorPerg = 1;
    endGame()}

}

function recomeçar(){
    pergunta.innerHTML = '';
    for (var i = 0; i < resp.length; i++) {
        resp[i].innerHTML = '';
        jogar
    }
    setTimeout(() => {  
        layoutRespostas.style.display = 'none'
        jogar()
    }, 300);


}

function gerarResposta(){
    for(var i = 0; i < resp.length; i++) {
        numResposta = data[0]['resposta'][numAleatorio[i]]
        resp[i].innerHTML = numResposta
        if(numResposta[6] == numPergunta[0]){
            respostaCerta = [i]
        }
    }
    
    
}

function gerarPergunta(){
    p1 = document.createElement('img')
    p1.classList.add('imgPergunta')
    p1.setAttribute('src', `images/perguntas/${numPergunta}`)
    pergunta.append(p1)
}

function selecionarResposta(respostaIndex){
    const button = document.getElementById(`respostas${respostaIndex}`)
    

    if(respostaCerta ==respostaIndex ){
        button.style.background = 'green'
        layoutRespostas.innerHTML ='Parabens, você acertou!'   
        respAcertadas++
          
    }else{
        button.style.background = 'red'
        layoutRespostas.innerHTML ='Que pena, você errou!'
        respErradas++
        
    }
    layoutRespostas.style.backdropFilter = 'blur(8px)'
    layoutRespostas.style.display = 'block'

    buttonContinue = document.createElement('button')
    buttonContinue.classList.add('continue')
    buttonContinue.textContent=('Proxima pergunta')
    buttonContinue.setAttribute('onClick', 'recomeçar()')
    layoutRespostas.append(buttonContinue)

    setTimeout(() => {  
        button.style.background = 'pink'
    }, 800);
    
}

function endGame(){
    var msg;
    buttonContinue = document.createElement('button')
    buttonContinue.classList.add('btn-resultado')
    buttonContinue.textContent=('Voltar ao menu')
    buttonContinue.setAttribute('onClick', "window.location.href='index.html';")

    resultado = document.createElement('div')
    resultado.classList.add('resultado')

    if(respAcertadas < 5){
        msg = (`Você acertou apenas ${respAcertadas} perguntas, isso pode melhorar!`)
    }
    else{
        msg = (`Parabéns, você acertou ${respAcertadas} perguntas!`)
    }
    resultado.innerHTML =(`<span>Resultado: <br>
                            ${msg}</span>`)
                  
   

    tela.append(buttonContinue)
    tela.append(resultado)
    botãoReturn.style.display = 'none'
    pergunta.style.display = 'none'
    respLayout.style.display = 'none'
    contador.style.display = 'none'
    console.log('acabou')
    console.log(`respostas acertadas:${respAcertadas}`) 
    console.log(`respostas erradas:${respErradas}`) 
}
