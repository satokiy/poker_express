const Deck = require('../models/deck.js');
const cards = new Deck().deal(5);

exports.handler = cards;