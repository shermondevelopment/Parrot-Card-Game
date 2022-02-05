import Question from './question.js'
import CreateCard from './createCard.js'
import EventCard from './eventCard.js';

/* O objeto da class question Solicita ao usuario um valor entre 4 é 14 */ 

const question = new Question();

/* Pergunte ao usuario a quantidade de  cartas entre 4 e 14 */

question.questionOfNumberCards()

/** o Metodo answer retorna o numero de cartas digitadas pelo usuario  */

const numberOfCards = question.getNumberOfCards()


/* Renderiza as cartas na tela */

const cardRender = new CreateCard(numberOfCards, '.main__cards', '.card')
cardRender.__renderCardsOnScreen()
// cardRender.defineCarts()

/* adiciona eventos de click aos cards */
const eventCard = new EventCard('.card', numberOfCards, question, cardRender)
eventCard._bind()
eventCard._addEventListenerInCard()