/**
 * Properly formats and sends JSEND responses
 */

const jsonResponse = {
  sendSuccess: (data, res) => {
    return res.json({status: 'success', data: data});
  },
  sendError: (message, status, res) => {
    res.status(status);
    return res.json({status: 'error', message: message});
  },
  sendFail: (message, status, res) => {
    res.status(status);
    return res.json({status: 'fail', message: message});
  }
};

module.exports = jsonResponse;
