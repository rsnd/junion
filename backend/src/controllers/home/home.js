const jsonResponse = require('../../utils/jsonResponse');

const home = (req, res) => {
  jsonResponse.sendSuccess(true, res);
};

module.exports = home;
