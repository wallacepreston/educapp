// Initializes the `users` service on path `/users`
const createService = require('feathers-objection');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    model: Model,
    paginate
  };

  // Initialize our service with any options it requires
  const usersService = createService(options);
  console.log(usersService);
  app.use('/users', usersService);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);
};
