const {Deck} = require('../models/deck');
const service = require('../service/judgePokerService');

exports.handler = async (event) => {
  const path = event.context["resource-path"];
  const httpMethod = event.context["http-method"];
  let body;

  try {
    switch (path) {
      case '/api/v1/poker/draw':
        body = await draw();
        break;
      case '/api/v1/poker/draw_and_play':
        body = await draw_and_play();
        break;
      // case 'compete':
      //   break;
      default:
        throw new Error(`Unsupported path "${path}"`);
      }
  } catch (err) {
      body = err.message;
  };
    
  return {
    path,
    httpMethod,
    body
  };
};

const draw = () => {
  const drawCards = new Deck({includesJoker: false}).deal(5);
  const cards = [];
  drawCards.forEach((card) => {
    cards.push(card.suit + card.label);
  });

  return cards;
};

const draw_and_play = () => {
  const cards = draw();
  console.log(cards);
  const result = service.judgePoker(cards)
  
  return {cards, ...result};
};


