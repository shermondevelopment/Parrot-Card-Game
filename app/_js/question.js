export default class Question {

  constructor() {
    this.answerValue = 0;
  }

  questionOfNumberCards() {
    while(this.answerValue % 2 !== 0  || this.answerValue > 14 || this.answerValue <= 2){
     this.answerValue = parseInt(prompt("Digite um número de cartas par entre 4 e 14"))
    }
  }

  getNumberOfCards() {
    return this.answerValue
  }

 

}