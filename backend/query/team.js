module.exports = {
  postTeam: `insert into team
  (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT)
  values
  (?, ?, '01', now(), now());`,
  getTeam: `select * from team where CHR_ID = ? ORDER BY TAB_ID DESC;`,
};
