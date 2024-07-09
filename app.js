let listaNum = [];
let numMax = 50;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
     let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
};

function exibirMsgInicial (){
    exibirTextoNaTela("h1","Jogo Do Número Secreto");
    exibirTextoNaTela("p",`Escolha um número de 1-${numMax}`);
};
exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas":"tentativa";
    if (chute == numSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p",`Parabéns o número secreto era ${numSecreto}! Você descobriu em ${tentativas} ${palavraTentativa}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        tentativas++;
        limparCampo();
        if (chute > numSecreto){
            exibirTextoNaTela("p",`O número é menor que ${chute}.`);
        } else {
            exibirTextoNaTela("p",`O número é maior que ${chute}.`);
        };
    };
};

function gerarNumAleatorio (){
    let numEscolhido = parseInt(Math.random()*numMax+1);
    let qntdElementosLista = listaNum.length;
    if (qntdElementosLista == numMax){
        listaNum =[];
    };
    if (listaNum.includes(numEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNum.push(numEscolhido);
        return numEscolhido;
    };
};

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
};

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
};