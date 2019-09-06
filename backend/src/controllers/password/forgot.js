const jsonResponse = require('../../utils/jsonResponse');

const forgot = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = forgot;
