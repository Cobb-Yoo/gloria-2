const pool = require("../database/pool");
const Query = require("../sql/user");

exports.getUser = async () => {
  try {
    console.log("hello");
    const data = await pool.query(Query.getUser);
    return data[0];
  } catch (err) {
    console.log(err);
  }
};
