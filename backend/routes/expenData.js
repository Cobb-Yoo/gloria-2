var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/expenData");

router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body.name);

    await pool.query(sql.postExpenData, []);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = await pool.query(sql.getExpenData);
    //const data = await pool.query(sql.getOfferData, [req.query.chr_id]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
