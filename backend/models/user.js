"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // 전체 모델을 파라미터로 받아서 현재 모델과 연관 관계를 정의해야 하는 모델이 있다면 여기서 정의함...
    }
  }

  User.init(
    {
      tid: DataTypes.INTEGER,
      cid: DataTypes.CHAR,
      type: DataTypes.CHAR,
      pid: DataTypes.CHAR,
      depart: DataTypes.CHAR,
      detail: DataTypes.CHAR,
      state: DataTypes.CHAR,
      rgstDate: DataTypes.DATE,
      rgstId: DataTypes.CHAR,
      crctDate: DataTypes.DATE,
      crctId: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
