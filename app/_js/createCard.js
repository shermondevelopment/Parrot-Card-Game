export default class CreateCard {

  constructor(numberOfCards, cardBox, card) {
    this.numberOfCards = numberOfCards
    this.cardBox = document.querySelector(cardBox)
    this.cardss = []
  }

  __renderCardsOnScreen() {
    this.shuffleCards()
    this.cardss.sort(function() {
      return Math.random() - 0.5;
    })
    for(let i = 0; i < this.cardss.length; i++) {
      this.cardBox.innerHTML += this.__templateOfCard(this.cardss[i])
    }
  }

  __templateOfCard(figure) {
    return `
      <card class="card" data-identifier="card" data-card="${figure}">
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

  shuffleCards() {
    for(let i = 0; i < (this.numberOfCards / 2); i++) {
      this.cardss.push(`logo${i}.png`)
      this.cardss.push(`logo${i}.png`)
    }
  }

}