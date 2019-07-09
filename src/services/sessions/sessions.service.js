// Initializes the `sessions` service on path `/sessions`
const createService = require('feathers-objection');
const createModel = require('../../models/sessions.model');
const hooks = require('./sessions.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    model: Model,
    paginate
  };

  // Initialize our service with any options it requires
  const sessionsService = createService(options);
  sessionsService.find = async () => {
    return await Model.query();
  };
  app.use('/sessions', sessionsService);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sessions');

  service.hooks(hooks);
};
