"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Work, Like }) {
      // define association here
      this.hasMany(Work, { foreignKey: "userId", as: "work" });
      this.hasMany(Like, { foreignKey: "userId", as: "like" });
    }
    toJSON() {
      return { ...this.get(), password: undefined };
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
