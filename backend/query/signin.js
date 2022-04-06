module.exports = {
  getChurch: `SELECT * FROM church where church.id = ? and church.pw = ?`,
};
