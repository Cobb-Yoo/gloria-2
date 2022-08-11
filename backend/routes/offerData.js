var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/offerData");

router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body.name);

    await pool.query(sql.postOfferData, [
      req.body.SAINT_NM,
      req.body.OFFER_NM,
      req.body.VALUE,
      req.body.OFFER_DT,
    ]);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const data = await pool.query(sql.getOfferData, [req.query.chr_id]);
    //console.log(data[0]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
