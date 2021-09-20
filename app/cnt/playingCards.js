const Suit = {
  SPADE: '♠',
  CLUB: '♣',
  DIAMOND: '♦',
  HEART: '♥'
};
module.exports.Suit = Suit;

const suitList = [
  Suit.SPADE,
  Suit.CLUB,
  Suit.DIAMOND,
  Suit.HEART
];
module.exports.suitList = suitList;

const cardList = [
  {rank: 2, label: '2' },
  {rank: 3, label: '3' },
  {rank: 4, label: '4' },
  {rank: 5, label: '5' },
  {rank: 6, label: '6' },
  {rank: 7, label: '7' },
  {rank: 8, label: '8' },
  {rank: 9, label: '9' },
  {rank: 10, label: '10' },
  {rank: 11, label: 'J' },
  {rank: 12, label: 'Q' },
  {rank: 13, label: 'K' },
  {rank: 14, label: 'A' }
];
module.exports.cardList = cardList;

// 各スートごとに2からAまで作成する
// eg) { suit: '♠️', rank: 2, label: '2' },
const deckBase = suitList.map((suit) => cardList.map((card) => ({suit, ...card}))).flat();
module.exports.deckBase = deckBase;

// ジョーカー(初期は使わない)
const joker = Object.freeze({ isWildcard: true, label: 'Joker' });
module.exports.joker = joker;

// suitの数をそれぞれカウント
// eg) { '♠': 1, '♣': 2, '♦': 2, '♥': 0 }
const suitCount = (cards) => {
  let suits = cards.map( (value) => {
    return value.slice(0,1);
  });
  const count = {
    [Suit.SPADE]:　0,
    [Suit.CLUB]:　0,
    [Suit.DIAMOND]:　0,
    [Suit.HEART]:　0
  };

  suits.forEach((suit) => { count[suit]++ });
  return count;
};
exports.suitCount = suitCount;

// numberの数をそれぞれカウント
// eg) {'2': 1, .. ,'13': 2, '14': 0 }
const numCount = (cards) => {
  let numbers = cards.map( (value) => {
    return value.slice(1);
  });
  let count = {};
  for(const l of cardList) {
    count[l.rank] = 0;
  };
  numbers.forEach((num) => {
    let rank = cardList.find((n) => n.label == num);
    count[rank.rank]++; });
  return count;
};
exports.numCount = numCount;