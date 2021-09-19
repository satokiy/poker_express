const Suit = {
  SPADE: '♠️',
  CLUB: '♣️',
  DIAMOND: '♦️',
  HEART: '♥️'
};

const suitList = [
  Suit.SPADE,
  Suit.CLUB,
  Suit.DIAMOND,
  Suit.HEART
];

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



// 各スートごとに2からAまで作成する
// eg) { suit: '♠️', rank: 2, label: '2' },
const deckBase = suitList.map((suit) => cardList.map((card) => ({suit, ...card}))).flat().map(Object.freeze);
module.exports.deckBase = deckBase;
// ジョーカー(初期は使わない)
const joker = Object.freeze({ isWildcard: true, label: 'Joker' });

module.exports.joker = joker;
