const pool = require("../database/pool");
const query = require("../sql/user");

exports.getUser = async () => {
  try {
    console.log("hello2");
    const data = await pool.query(query.getUser);
    return data[0];
  } catch (err) {
    console.log(err);
  }
};
