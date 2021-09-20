const rankHand = (hands) => {
  let rank = 1;
  hands.sort( (a,b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });
  hands.forEach((hand) => {
    result.rank = rank;
    rank++;
  });
  return hands;
};
exports.rankHand = rankHand;