/* eslint-disable no-console */
const app = require('./app');
const usersSeed = require('./seeds/seedUsers.json');
const sessionsSeed = require('./seeds/seedSessions.json');
const invoicesSeed = require('./seeds/seedInvoices.json');

const seed = async () => {
  try {
    // await Promise.all(usersSeed.map(user => app.service('users').create(user)));
    // console.log('seeding users complete!');
    
    // await Promise.all(sessionsSeed.map(session => app.service('sessions').create(session)));
    // console.log('seeding sessions complete!');

    await Promise.all(invoicesSeed.map(invoice => app.service('invoices').create(invoice)));
    console.log('seeding invoices complete!');
    
  } catch (err) {
    console.error(err);
    
  }
};

seed();
