module.exports = {
  postOfferData: `INSERT INTO offerData (
      CHR_ID 
    , SAINT_NM
    , OFFER_NM
    , VALUE
    , MATE_STAT
    , OFFER_DT
    , INST_DT
    , UP_DT
    ) VALUES (
      ?
      , ?
      , ?
      , ?
      , '01'
      , ?
      , NOW()
      , NOW())`,

  getOfferData: `
      SELECT * FROM offerData where CHR_ID = ?
  `,
};
