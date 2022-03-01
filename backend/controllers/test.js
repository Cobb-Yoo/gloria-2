const testService = require("../service/test");

exports.getUser = async (req, res, next) => {
  try {
    console.log("hello2");
    const rows = await testService.getUser();
    return res.json(rows[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
};
