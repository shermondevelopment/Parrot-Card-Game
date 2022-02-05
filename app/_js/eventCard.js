import Question from './question.js'
import CreateCard from './createCard.js';

export default class EventCard {

  constructor(card, numbeOfCards, question, cardRender) {
    this.cards = document.querySelectorAll(card);
    this.countClick = 0;
    this.numbeOfCards = numbeOfCards;
    this.firstCard = undefined;
    this.secondCard = undefined;
  }

  
  _comeToLatter(element) {
    element.currentTarget.classList.add('rotate')
    this.countClick += 1

    this.setPlay(this.countClick)

    this.secondCard = this.firstCard  ? element.currentTarget : undefined;

    if(!this.firstCard) {
      this.firstCard = element.currentTarget
    }
    
    this._compareCard()
    this._checkGame()

  }

  _addEventListenerInCard() {
    this.cards.forEach(element => {
      element.addEventListener('click', this._comeToLatter)
    });
  }

  
_untapCard() {
    this.cards.forEach( element => {
      element.classList.remove('rotate')
    } )
}

_compareCard() {
  if(this.firstCard.dataset.card === this.secondCard.dataset.card) {
    this.firstCard.classList.add('check')
    this.secondCard.classList.add('check')
  } else if (this.firstCard.dataset.card !== this.secondCard.dataset.card){
    setTimeout(this._untapCard, 1000);
  }
  this.firstCard = undefined
  this.secondCard = undefined
}

_bind() {
  this._comeToLatter = this._comeToLatter.bind(this)
  this._compareCard = this._compareCard.bind(this)
  this._untapCard = this._untapCard.bind(this)
}

_checkGame() {
  let cardsCompleted = document.querySelectorAll('.check');
  if(cardsCompleted.length === this.numbeOfCards) {
    cardsCompleted.forEach( item => item.removeEventListener('click', this._comeToLatter) )
    setTimeout(() => {
      alert(`Você ganhou em ${this.countClick} jogadas e em 00:00 minutos`)
    }), 1000;
    setTimeout(() => {
      const response = prompt(`deseja reiniciar a partida? s ou n`);
      if(response === 's') {
        document.querySelector('.main__cards').innerHTML = ""
        let question = new Question()
        question.questionOfNumberCards()
        const numberOfCards = question.getNumberOfCards()
        const cardRender = new CreateCard(numberOfCards, '.main__cards', '.card')
        cardRender.__renderCardsOnScreen()
        const eventCard = new EventCard('.card', this.numberOfCards, question, cardRender)
        eventCard._bind()
        eventCard._addEventListenerInCard()
      }
    }, 1000);
  }
}

_resetgame() {

}

setPlay(count) {
  document.querySelector('.option__play').innerHTML = count;
}


 
}