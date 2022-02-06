let numberCards;
let countMoves = 0;
let firstCart;
let secondCart;
let cardBox = document.querySelector('.main__cards');
let shuffleCard = []

/* 
/* Time of Game 
*/

let minute = 0;
let second = 0;
let stopWatchInterval;

/*
/* A Função startGame inicia o jogo pedindo um número de cartas par entre 4 e 14
/*
*/

function startGame() {
  numberCards = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
  while(numberCards % 2 !== 0  || numberCards > 14 || numberCards <= 2){
    numberCards = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
  }
}

/* 
/* A Função shuffleCards cria um array com figuras
/* Logo após da criação do array cards o mesmo e embaralhado
*/

function shuffleCards () {
  let cards = []
  for(let i = 0; i < numberCards / 2; i++) {
    cards.push(`logo${i}.png`);
    cards.push(`logo${i}.png`);
  }
  shuffleCard = cards.sort(function(){
    return Math.random() - 0.5; 
  })
  return shuffleCard;
}

/* 
/* ShowCards renderiza os cards na tela com base no total de cartas fornecido pelo usuarios
*/

function showCards() {
  cardBox.innerHTML = ''
  let figures = shuffleCards()
  for(let i = 0; i < numberCards; i++) {
    cardBox.innerHTML += templateCard(figures[i])
  }
}

/*
/* templateCard retorna o template a qual o card será renderizado na tela
*/

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

/*
/* turnCards remove todas as class rotate dos cards
/* ex: usuario clicou em duas cartas mais ambas não corresponde então essa função e chamada
*/
function turnCards() {
  let cards = document.querySelectorAll('.card.rotate');

  cards.forEach( item => item.classList.remove('rotate') )
}

/*
/* checkEqualityCards e responsável por verificar se as cartas clicadas se correspondem
*/

function checkEqualityCards(me) {
  secondCart = firstCart ? me : undefined
  if(!firstCart) {
    firstCart = me
  }
  if(firstCart.dataset.card === secondCart.dataset.card) {
    firstCart.classList.add('check')
    secondCart.classList.add('check')
  }

  if(firstCart.dataset.card !== secondCart.dataset.card) {
    setTimeout(turnCards, 500)
  }

  firstCart = undefined
  secondCart = undefined
  
}

/* 
/* Função e chamada quando o card e clicado
*/


function clickedMe(me) {
  countMoves += 1;
  checkStartedGame()
  updateNumberOfMoves()
  me.classList.add('rotate')
  checkEqualityCards(me)
  setTimeout(endOfTheGame, 1000)
}

/* 
/* Atualiza número de jogadas
*/

function updateNumberOfMoves() {
  document.querySelector('.option__play').innerHTML = countMoves;
}

function endOfTheGame() {
  let numberTurnedCards = document.querySelectorAll('.check');
  if(numberTurnedCards.length === numberCards) {
    alert(`Você ganhou em ${countMoves} jogadas! em ${ (minute != 0 &&  second == 0) ? `${minute} minutos` : (minute !== 0 && second !== 0) ? `${minute} minutos e ${second} segundos` : `${second} segundos`}`)
    resetGame()
  }
}

function resetGame() {
  let toAsk = prompt("Deseja jogar novamente? (s ou n)")
  if(toAsk === 's') {
    startGame()
    showCards()
    countMoves = 0;
    minute = 0;
    second = 0;
    resetStopWatch()
    updateNumberOfMoves()
  }
  clearInterval(stopWatchInterval);
}

function checkStartedGame() {
  if(countMoves === 1) {
    stopWatch()
  }
}

function stopWatch() {
  let minutes = document.querySelector('.minutes')
  let seconds = document.querySelector('.seconds')


  stopWatchInterval = setInterval(() => {
    second += 1
    if(second >= 59) {
      second = 0;
      minute += 1;
      seconds.innerHTML = second;
      minutes.innerHTML = minute <= 9 ? `0${minute}` : minute;
    }
    seconds.innerHTML = second < 10 ? `0${second}` : second;

  }, 1000)

}

function resetStopWatch() {
  let minutes = document.querySelector('.minutes').innerHTML = "00"
  let seconds = document.querySelector('.seconds').innerHTML = "00"
}