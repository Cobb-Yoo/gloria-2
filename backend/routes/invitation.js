var express = require("express");
var router = express.Router();
const pool = require("../db/pool");
const sql = require("../query/invitation");

// 심방가져오기
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(sql.getInvitation, [
      req.query.startDt,
      req.query.endDt,
      req.query.name,
    ]);

    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//심방등록
router.post("/", async (req, res, next) => {
  try {
    //console.log(req.body);
    //return res.status(200);
    const result = await pool.query(sql.postInvitation, [
      req.body.id,
      req.body.pw,
      req.body.name,
      req.body.loc,
      req.body.email,
    ]);

    console.log(next);

    return res.json(result[0]);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
