const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "qhdks12##",
  database: "gloria",
});

module.exports = pool;
