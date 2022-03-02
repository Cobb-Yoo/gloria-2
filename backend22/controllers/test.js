const testService = require("../service/test");

exports.getUser = async (req, res, next) => {
  try {
    console.log("hello controller");
    const rows = await testService.getUser();
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};
