module.exports = {
  postPosition: `insert into positions
  (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT)
  values
  (1, ?, '01', now(), now());`,
  getPosition: `select * from positions where CHR_ID = 1 ORDER BY TAB_ID DESC;`,
};
