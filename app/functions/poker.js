const {Deck} = require('../models/deck');
const service = require('../service/judgePokerService');
const rankService = require('../service/rankService');

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
      case '/api/v1/poker/compete':
        const params = event["body-json"];
        body = await compete(params);
        break;
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
  const result = service.judgePoker(cards)
  
  return {cards, ...result};
};

const compete = (params) => {
  const results = [];
  params.forEach((param) => {
    const hand = service.judgePoker(param["cards"]);
    results.push({...hand, ...param})
  });
  
  return rankService.rankHand(results);
};

