module.exports = {
  postOfferingType: `insert into offeringType (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT) VALUES (1, ?, '01', NOW(), NOW());`,
  getOfferingType: `select * from offeringType where CHR_ID = 1 ORDER BY TAB_ID DESC;`,
};
