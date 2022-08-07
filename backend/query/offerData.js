module.exports = {
  postOfferData: `INSERT INTO offerData
    (CHR_ID, NAME, MATE_STAT, INST_DT, UP_DT)
    VALUES
    (1, ?, '01', NOW(), NOW())`,
};
