const jsonResponse = require('../../utils/jsonResponse');

const create = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = create;
