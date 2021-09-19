const express = require('express');
const router = express.Router();
const service = require('../service/judgePokerService')
const {Deck} = require('../models/deck.js')

/* GET home page. */
router.get('/', (req, res, next) => {
  // カードを5枚取得
  const cards = new Deck().deal(5);
  
  let placeholder = '';
  cards.forEach((card) => {
    placeholder = placeholder + (card.suit + card.label);
  });
  // console.log(placeholder);
  
  res.render('index', {placeholder: placeholder});
});

// 役判定
router.post('/cards', (req, res) => {
  console.log('--- post /cards called ---');
  console.log(req.body);
  // console.log(judgePokerService.judgePoker(req.body['card_field']));
  let { suits, numbers } = service.judgePoker(req.body['card_field'])
  res.render('index', { params: [suits, numbers]});
});



module.exports = router;
