var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/offeringType");

router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body.name);

    await pool.query(sql.postOfferingType, [req.body.name]);

    return res.send(200);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const data = await pool.query(sql.getOfferingType, [req.query.chr_id]);
    //console.log(data[0]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
