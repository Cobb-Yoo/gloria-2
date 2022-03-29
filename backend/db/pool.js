const mysql = require("mysql2");

// connection pool을 생성한다. pool-specific setting들은 디폴트다.
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "gloria",
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
