const jsonResponse = require('../../utils/jsonResponse');

const reset = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = reset;
