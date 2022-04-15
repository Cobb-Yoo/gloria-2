module.exports = {
  postChurch: `insert into church
  (ID, PW, NAME, LOC, EMAIL, MATE_STAT, INST_DT, UP_DT)
  values (?,?,?,?,?,'01',now(),now())`,
};
