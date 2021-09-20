const {Deck} = require('../models/deck');
const drawDards = new Deck({includesJoker: true}).deal(5);

exports.handler = async (event) => {
    let cards = [];
    drawDards.forEach((card) => {
      cards.push(card.suit + card.label);
    });
    const response = {
        cards: cards
    };
    return response;
};
