const jsonResponse = require('../../utils/jsonResponse');

const admin = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = admin;
