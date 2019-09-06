const jsonResponse = require('../../utils/jsonResponse');

const getAll = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = getAll;
