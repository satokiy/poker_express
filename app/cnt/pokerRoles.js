const playingCards = require('../cnt/playingCards')
// ポーカーの役を定義
// firstメソッドなどはないのでArray[i]で取得
const roles = [
  {name: 'straight flush', score: 8000},
  {name: 'straight', score: 4000},
  {name: 'flush', score: 5000},
  {name: 'four of a kind', score: 7000},
  {name: 'full house', score: 6000},
  {name: 'three card', score: 3000},
  {name: 'two pair', score: 2000},
  {name: 'high card', score: 0},
  {name: 'one pair', score: 1000},
];
exports.roles = roles;

// Flush
const isFlush = (cards) => {
  const suitOnHand = playingCards.suitCount(cards);
  return playingCards.suitList.some(
    (s) => suitOnHand[s] == 5
  );
};
exports.isFlush = isFlush;

// FourOfAKind
const isFourOfAKind = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  return Object.values(numOnHand).some((v) => v == 4 );
};
exports.isFourOfAKind = isFourOfAKind;

// FullHouse
const isFullHouse = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  if (Object.values(numOnHand).some((v) => v == 3) && 
  Object.values(numOnHand).some((v) => v == 2)) {
    return true;
  } else {
    return false;
  }
};
exports.isFullHouse = isFullHouse;

// ThreeCard
const isThreeCard = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  if (Object.values(numOnHand).some((v) => v == 3) && 
  Object.values(numOnHand).every((v) => v !== 2)) {
    return true;
  } else {
    return false;
  }
};
exports.isThreeCard = isThreeCard;

// TwoPair
const isTwoPair = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  if (Object.values(numOnHand).filter((v) => v == 2).length == 2) {
    return true;
  } else {
    return false;
  }
};
exports.isTwoPair = isTwoPair;

// OnePair
const isOnePair = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  if (Object.values(numOnHand).some((v) => v == 2)) {
    return true;
  } else {
    return false;
  }
};
exports.isOnePair = isOnePair;

// Straight
// Aceを最大として、2 ~ Aの中で5連続になっているか判定(厳密にやりたければ別で)
const isStraight = (cards) => {
  const numOnHand = playingCards.numCount(cards);
  let numArray = [];
  for(let [key, value] of Object.entries(numOnHand)) {
    if (value == 1) {
      numArray.push(key);
    };
  };
  // すべてのカードが1枚でなければならない
  if (numArray.length !== 5) {
    return false;
  };
  // 変換と並び替え
  numArray = numArray.map(Number).sort((a, b) => { return a - b; })
  // 最大値と最小値の差分が4ならストレート
  return (numArray[4] - numArray[0] == 4);
};
exports.isStraight = isStraight;