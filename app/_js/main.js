let numberCards;
let cardBox = document.querySelector('.main__cards');

function startGame() {
  numberCards = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
  while(numberCards % 2 !== 0  || numberCards > 14 || numberCards <= 2){
    this.answerValue = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
   }
}

function showCards() {
  for(let i = 0; i < numberCards; i++) {
    cardBox.innerHTML += `<span>Olá</span>`
  }
}

showCards()