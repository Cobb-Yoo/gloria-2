module.exports = {
  getUserList: `SELECT * FROM user`,
  postUser: `insert into user(tid, cid, id, pw, name, position, auth, state, rgstDate, rgstId, crctDate, crctId) values(2, 1, 'id3', 'id3','testName3','position','auth3','state3',now(),'1',now(),'1')`,
};
