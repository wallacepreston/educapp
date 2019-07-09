// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class sessions extends Model {

  static get tableName() {
    return 'sessions';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['instructorId', 'studentId'],
    };
  }
  
  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = function (app) {
  const db = app.get('knex');

  db.schema.hasTable('sessions').then(exists => {
    if (!exists) {
      db.schema.createTable('sessions', table => {
        table.increments('id');
        table.integer('instructorId');
        table.integer('studentId');
        table.timestamp('date');
        table.float('hours');
        table.text('description');
        table.string('location');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
      })
        .then(() => console.log('Created sessions table')) // eslint-disable-line no-console
        .catch(e => console.error('Error creating sessions table', e)); // eslint-disable-line no-console
    }
  })
    .catch(e => console.error('Error creating sessions table', e)); // eslint-disable-line no-console

  return sessions;
};
