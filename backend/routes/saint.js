var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/saint");

// 로그인

/* GET users listing. */
router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    await pool.query(sql.postSaint, [
      req.body.name,
      req.body.position,
      req.body.region,
      req.body.age,
      req.body.gender,
    ]);

    return res.send(200);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    const data = await pool.query(sql.getSaint, [req.query.chr_id]);
    //console.log(data[0]);

    return res.json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
