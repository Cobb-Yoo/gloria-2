module.exports = {
  getInvitation: `
    SELECT *
    FROM INVITATION
    WHERE INVIT_DT BETWEEN  ? AND  ?`,

  setInvitation: `
  INSERT INTO INVITATION (CHR_ID, CONTENTS, INVIT_DT, MATE_STAT, INST_DT, UP_DT)
  VALUES
  (?, ?, ?, '01', NOW(), NOW())
  `,

  setSaints: `
  INSERT INTO
  INVITATION_SAINT_LIST
  ( INVITATION_TAB_ID
  , USER_ID
  , MATE_STAT
  , INST_DT
  , UP_DT )
  values
  ( ?,?,'01', NOW(), NOW() )
  `,
};
