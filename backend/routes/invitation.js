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
    console.log(req.body.invitDt);

    //console.log(req.body.saintsId.length);

    await pool
      .query(sql.setInvitation, [
        req.body.chrId,
        req.body.contents,
        req.body.invitDt,
      ])
      .then((result) => {
        for (var i = 0; i < req.body.saintsId.length; i++) {
          //console.log(req.body.saintsId[i]);
          pool.query(sql.setSaints, [result[0].insertId, req.body.saintsId[i]]);
        }

        return res.send(200);
      })
      .catch((e) => {
        console.error(e);
      });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
