module.exports = {
  postRegion: `INSERT INTO REGION
    (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT)
    VALUES
    (?, ?, '01', now(), now());`,
  getRegion: `SELECT *
  FROM REGION
  WHERE CHR_ID = ?
  ORDER BY TAB_ID DESC;`,
};
