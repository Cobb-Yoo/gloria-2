module.exports = {
  postExpenCate: `INSERT INTO EXPENCATE
    (CHR_ID, CATE_NAME, MATE_STAT, INST_DT, UP_DT)
    VALUES
    (?, ?, '01', now(), now())`,

  getExpenCate: `SELECT *
     FROM EXPENCATE
    WHERE CHR_ID = ?`,
};
