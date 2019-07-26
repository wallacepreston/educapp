// Initializes the `sessions` service on path `/sessions`
const createService = require('feathers-objection');
const hooks = require('./sessions.hooks');
const Session = require('../../models/sessions.model');

module.exports = function (app) {

  const options = {
    model: Session,
    paginate: app.get('paginate'),
    multi: true,
    whitelist: ['$eager', '$joinRelation'],
    allowedEager: '[students,instructor]',
  };

  // Initialize our service with any options it requires
  app.use('/sessions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('sessions');

  service.hooks(hooks);
};
