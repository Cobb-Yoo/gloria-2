module.exports = {
  postRegion: `insert into region
    (CHR_ID, NAME, LEADER, MATE_STAT, INST_DT, UP_DT)
    values
    (1, ?, null, '01', now(), now());`,
  getRegion: `select * from region where CHR_ID = 1 ORDER BY TAB_ID DESC;`,
};
