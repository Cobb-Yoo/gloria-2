module.exports = {
  postSaint: `insert into saint
     (CHR_ID, NAME, POSITION, REGION, AGE, GENDER, MATE_STAT, INST_DT, UP_DT)
     values
     (?,?,?,?,?,? ,'01', NOW(), NOW())`,
  getSaint: "select * from saint where CHR_ID = ? ORDER BY TAB_ID DESC;",
};
