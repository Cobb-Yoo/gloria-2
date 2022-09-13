module.exports = {
  postExpenData: `INSERT INTO EXPENDATA
    (CHR_ID, CATE_ID, TEAM_ID, VALUE, MATE_STAT, INST_DT, UP_DT)
    VALUES
    (?, ?, ?, ?, '01', now(), now())`,

  getExpenData: `SELECT *
     FROM EXPENDATA
    WHERE CHR_ID = ?`,
};
