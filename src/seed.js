const app = require('./app');
const usersSeed = require('./lib/seedUsers.json');
const sessionsSeed = require('./lib/seedSessions.json');

const seed = async () => {
  try {
    await Promise.all(usersSeed.map(user => app.service('users').create(user)));
    console.log('seeding users complete!');
    
    await Promise.all(sessionsSeed.map(session => app.service('sessions').create(session)));
    console.log('seeding sessions complete!');
    
  } catch (err) {
    console.error(err);
    
  }
};

seed();
