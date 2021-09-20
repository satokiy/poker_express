const {joker, deckBase} = require('../cnt/playingCards.js')

// 山札クラス
class Deck {
  constructor(options = {}) {
    this._deck = [...deckBase]; // deckBaseをコピー
    if(options.includesJoker) { this._deck.push(joker); }

    // シャッフル
    // Math.random -> 0以上1未満の値を返す
    // sort -> callback関数の結果が正か負かで並べ替え順序が変わる
    this._deck.sort((a, b) => Math.random() - 0.5);
  }

  // 山札からカードを取り出すメソッド
  deal(num) {
    return this._deck.splice(0, num);
  }
};
exports.Deck = Deck;