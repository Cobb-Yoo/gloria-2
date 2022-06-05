module.exports = {
  getInvitation: `
    SELECT *
    FROM INVITATION
    WHERE CHR_ID = ?
      AND INVIT_DT BETWEEN  ? AND  ?`,
  setInvitation: `
  INSERT INTO INVITATION (CHR_ID, CONTENTS, INVIT_DT, MATE_STAT, INST_DT, UP_DT)
  VALUES
  (?, ?, ?, '01', NOW(), NOW())
  `,
};
