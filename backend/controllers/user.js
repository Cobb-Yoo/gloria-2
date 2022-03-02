const userService = require("../services/user");

exports.getUser = async (req, res, next) => {
  try {
    console.log("hello controller user");
    const rows = await userService.getUser();
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};
