const express = require('express');
const router = express.Router();
const service = require('../service/judgePokerService')
const {Deck} = require('../models/deck.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  // カードを5枚取得
  const cards = new Deck().deal(5);
  
  let placeholder = [];
  cards.forEach((card) => {
    placeholder.push(card.suit + card.label);
  });
  console.log(placeholder);
  
  res.render('index', {placeholder: placeholder});
});

// POST 役判定
router.post('/judge', (req, res) => {
  console.log('--- post /cards called ---');
  console.log(req.body);
  // console.log(judgePokerService.judgePoker(req.body['card_field']));
  let result = service.judgePoker(req.body['card_field'])
  console.log(result);
  res.render('index', { placeholder: req.body['card_field'], hands: result});
});



module.exports = router;
