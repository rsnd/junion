const jsonResponse = require('../../utils/jsonResponse');

const validate = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = validate;
