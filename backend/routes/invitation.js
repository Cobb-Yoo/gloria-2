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
    //return res.status(200);
    //console.log(req.body.saintsId);

    console.log(req.body.saintsId.length);

    await pool
      .query(sql.setInvitation, [
        req.body.chrId,
        req.body.contents,
        req.body.invitDt,
      ])
      .then((result) => {
        console.log(result[0].insertId);
        console.log("good");

        for (var i = 0; i < req.body.saintsId.length; i++) {
          pool.query(sql.setSaints, [result[0].insertId, req.body.saintsId[i]]);
        }

        console.log("good2");

        return res.json(result);
      });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
