// Initializes the `invoices` service on path `/invoices`
const createService = require('feathers-objection');
const Invoice = require('../../models/invoices.model');
const hooks = require('./invoices.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');

  const options = {
    model: Invoice,
    paginate,
    whitelist: ['$eager', '$joinRelation'],
    allowedEager: '[students,instructor,session]',
  };

  // Initialize our service with any options it requires
  app.use('/invoices', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('invoices');

  service.hooks(hooks);
};
