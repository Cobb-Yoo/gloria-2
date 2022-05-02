module.exports = {
  postOffering: `insert into offering
    (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT)
    VALUES
    (1, ?, '01', NOW(), NOW())`,
};
