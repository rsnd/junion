// Initializes the `polls` service on path `/polls`
const { Polls } = require('./polls.class');
const createModel = require('../../models/polls.model');
const hooks = require('./polls.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/polls', new Polls(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('polls');

  service.hooks(hooks);
};
