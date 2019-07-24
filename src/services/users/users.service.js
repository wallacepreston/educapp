// Initializes the `users` service on path `/users`
const createService = require('feathers-objection');
// const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const User = require('../../models/users.model');

module.exports = function (app) {
  const paginate = app.get('paginate');

  const options = {
    model: User,
    paginate,
    whitelist: ['$eager', '$joinRelation'],
    allowedEager: '[students,instructor]',
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);
};
