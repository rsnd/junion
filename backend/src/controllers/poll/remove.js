const jsonResponse = require('../../utils/jsonResponse');

const remove = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = remove;
