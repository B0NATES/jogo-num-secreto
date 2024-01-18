let listaDeNumSorteados = []
let numLimite = 5000
let numSecreto = gerarNumeroAleatorio()
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirMsgInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;



        if(chute == numSecreto){
            let tentativa = tentativas == 1? 'tentativa': 'tentativas'
            exibirTextoNaTela('h1', 'Acertou!');
            exibirTextoNaTela( 'h1', `Você descobriu o número secreto com ${tentativas} ${tentativa}`);

            document.getElementById('reiniciar').removeAttribute('disabled');
    
        }else if (chute < numSecreto){
            exibirTextoNaTela('h1', `O número secreto é maior que ${chute}`)
        }else{
            exibirTextoNaTela('h1', `O número secreto é menor que ${chute}`)
            tentativas ++;
        }
        limparCampo()
        
    }

    function exibirMsgInicial (){
        exibirTextoNaTela('h1', 'Jogo do Número secreto')
        exibirTextoNaTela('p', `Escolha um número entre 1 e ${numLimite.toString()}`)
    }

    function limparCampo (){
        chute = document.querySelector('input');
        chute.value =''
    }

    function reiniciarJogo(){
        numSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMsgInicial()
        document.getElementById('reiniciar').setAttribute('disabled', true)


    }




function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    
    if (listaDeNumSorteados.length == numLimite){
        listaDeNumSorteados = []
    }
    if (listaDeNumSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else {
        listaDeNumSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}
