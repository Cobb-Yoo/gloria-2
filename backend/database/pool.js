const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "qhdks12##",
  database: "gloria",
});

module.exports = pool;
