
const pokerRoles = require('../cnt/pokerRoles')

function judgePoker(str) {
  let cards = str.split(',');

  if (pokerRoles.isFlush(cards) && pokerRoles.isStraight(cards)) {
    console.log('straight flush');
    return pokerRoles.roles.find((v) => v.name == 'straight flush');
  
  } else if (pokerRoles.isFourOfAKind(cards)) {
    console.log('four of a kind');
    return pokerRoles.roles.find((v) => v.name == 'four of a kind');

  } else if (pokerRoles.isFullHouse(cards)) {
    console.log('full house');
    return pokerRoles.roles.find((v) => v.name == 'full house');

  } else if (pokerRoles.isFlush(cards)) {
    console.log('flush');
    return pokerRoles.roles.find((v) => v.name == 'flush');

  } else if (pokerRoles.isStraight(cards)) {
    console.log('straight');
    return pokerRoles.roles.find((v) => v.name == 'straight');

  } else if (pokerRoles.isThreeCard(cards)) {
    console.log('three card');
    return pokerRoles.roles.find((v) => v.name == 'three card');

  } else if (pokerRoles.isTwoPair(cards)) {
    console.log('two pair');
    return pokerRoles.roles.find((v) => v.name == 'two pair');

  } else if (pokerRoles.isOnePair(cards)) {
    console.log('one pair');
    return pokerRoles.roles.find((v) => v.name == 'one pair');

  } else {
    console.log('high card');
    return pokerRoles.roles.find((v) => v.name == 'high card');
  }
  
};

exports.judgePoker = judgePoker;

