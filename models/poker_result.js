'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokerResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PokerResult.init({
    userName: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    hand: DataTypes.STRING,
    cards: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'poker_result',
    underscored: true,
  });
  return PokerResult;
};
