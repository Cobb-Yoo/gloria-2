module.exports = {
  postSaint: `insert into saint
     (CHR_ID, NAME, POSITION, REGION, AGE, GENDER, MATE_STAT, INST_DT, UP_DT)
     values
     ('1',?,?,?,?,? ,'01', NOW(), NOW())`,
};
