const users = require('./users/users.service.js');
const sessions = require('./sessions/sessions.service.js');
const invoices = require('./invoices/invoices.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(sessions);
  app.configure(invoices);
};
