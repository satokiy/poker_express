
function judgePoker(str) {
  let cards = str.toUpperCase().split(' ');
  let suits = cards.map( (value) => {
    return value.slice(0,1);
  });
  let numbers = cards.map( (value) => {
    return value.slice(1,2);
  });
  return {
    suits: suits,
    numbers: numbers 
  };
};

export default judgePokerService;