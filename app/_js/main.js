let numberCards;
let cardBox = document.querySelector('.main__cards');
let shuffleCard = []

function startGame() {
  numberCards = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
  while(numberCards % 2 !== 0  || numberCards > 14 || numberCards <= 2){
    this.answerValue = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
  }
}

function shuffleCards () {
  let cards = []
  for(let i = 0; i < numberCards / 2; i++) {
    cards.push(`logo${i}.png`);
  }
  shuffleCard = cards.sort(function(){
    return Math.random() - 0.5; 
  })
  return shuffleCard;
}

function showCards() {
  let figures = shuffleCards()
  for(let i = 0; i < numberCards; i++) {
    cardBox.innerHTML += templateCard(figures[i])
  }
}

function templateCard(figure) {
  return `
    <card class="card" data-identifier="card" data-card="${figure}" onclick="clickedMe(this)">
    <card-back data-identifier="back-face" class="upturned--card">
      <img
        src="app/_image/${figure}"
        class="card__figure" alt="papagaio" />
    </card-back>
    <card-front data-identifier="front-face" class="untapped-card">
      <img src="app/_image/front.png" class="card__figure" alt="papagaio" />
    </card-front>
  </card>
  `
}

function clickedMe(me) {
  me.classList.add('rotate')
}
