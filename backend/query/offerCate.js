module.exports = {
  postOfferCate: `INSERT INTO offerCate (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT) VALUES (?, ?, '01', NOW(), NOW());`,
  getOfferCate: `SELECT * FROM offerCate WHERE CHR_ID = ? ORDER BY TAB_ID DESC;`,
};
