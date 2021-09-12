const express = require('express');
const router = express.Router();
import judgePokerService from ('../service/judgePokerService')

/* GET home page. */
router.get('/', (req, res, next) => {
  
  res.render('index');
});
router.post('/cards', (req, res) => {
  console.log('--- post /cards called ---');
  console.log(req.body);
  console.log(judgePoker(req.body['card_field']));
  let { suits, numbers } = judgePoker(req.body['card_field'])
  res.render('index', { params: [suits, numbers]});
});



module.exports = router;
