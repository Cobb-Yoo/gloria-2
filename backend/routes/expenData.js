var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/expenData");

router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body.name);

    await pool.query(sql.postExpenData, [
      req.body.CHR_ID,
      req.body.CATE_ID,
      req.body.TEAM_ID,
      req.body.VALUE,
    ]);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await pool.query(sql.getExpenData, [req.query.CHR_ID]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
