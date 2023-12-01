// Importando elementos do HTML

const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const  jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const score1Elemnt = document.querySelector("#score1")
const score2Elemnt = document.querySelector("#score2")
const resultElemnt = document.querySelector("p[name=result]")

// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0;
let contadorBot = 0;
//Função para alterar o score
function alterarScore(){
    score1Elemnt.innerHTML = `${contadorJogador}`;
    score2Elemnt.innerHTML = `${contadorBot}` };


// Adicionando eventos de click
papelElement.addEventListener("click",() => {
var bot = Math.floor(Math.random() * 3)
jogadorElement.scr = 'images/icon-paper.svg'
switch(bot){

case 0:
    botElement.scr = 'images/icon-rock.svg';
    resultElemnt.innerHTML = "Resultado : Você venceu!!! :D";
    contadorJogador++;
    break;
case 1:
    botElement.scr = 'images/icon-paper.svg';
    resultElemnt.innerHTML = "resultado: Empate... :/";
    break;
case 2:
    botElement.scr = 'images/icon-scissors.svg';
    resultElemnt.innerHTML = "resultador: Você Perdeu... D:";
    contadorBot++;
    break;

    }
   alterarScore()
})
