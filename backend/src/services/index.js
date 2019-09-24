const users = require('./users/users.service.js');
const events = require('./events/events.service.js');
const polls = require('./polls/polls.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(events);
  app.configure(polls);
  app.configure(messages);
};
