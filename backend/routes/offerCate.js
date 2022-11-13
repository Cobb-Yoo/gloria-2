var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/offerCate");

router.post("/", async (req, res, next) => {
  try {
    await pool.query(sql.postOfferCate, [req.body.chrId, req.body.name]);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const data = await pool.query(sql.getOfferCate, [req.query.chr_id]);
    //console.log(data[0]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
