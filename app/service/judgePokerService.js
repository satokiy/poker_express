
// ポーカーの役を定義
// firstメソッドなどはないのでArray[i]で取得
function roles() {
  const roles = [
    {role: 'ストレートフラッシュ', score: 8000, key: 1105},
    {role: 'ストレート', score: 4000, key: 1005},
    {role: 'フラッシュ', score: 5000, key: 105},
    {role: '4カード', score: 7000, key: 12},
    {role: 'フルハウス', score: 6000, key: 2},
    {role: '3カード', score: 3000, key: 13},
    {role: '2ペア', score: 2000, key: 3},
    {role: 'ハイカード', score: 0, key: 5},
    {role: '1ペア', score: 1000, key: 14},
]
return roles;
};


// 配列から重複を削除
function uniq(array) {
  const uniquedArray = [];
  for (const elem of array) {
    if (!uniquedArray.includes(elem))
      uniquedArray.push(elem);
  }
  return uniquedArray;
};


function judgePoker(str) {
  let cards = str.toUpperCase().split(' ');

  // Array: suits
  let suits = cards.map( (value) => {
    return value.slice(0,1);
  });

  // Array: numbers
  let numbers = cards.map( (value) => {
    return value.slice(1,2);
  });

  
  const uniq_num = uniq(numbers).length;
  const uniq_suit = uniq(suits).length;
  const max_num = Math.max.apply(null, numbers);
  const min_num = Math.min.apply(null, numbers);

  
  let key = uniq_num;
  // straight
  if (uniq_num == 5 && max_num - min_num == 4) {
    key += 1000;
  };
  // flash
  if (uniq_suit == 1) {
    key += 100;
  };

  

  // result
  let result = roles().find( (x) => x.key == key);
  return result;
};

// module.exports = judgePoker;
exports.judgePoker = judgePoker;
exports.roles = roles();
