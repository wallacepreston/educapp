// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class users extends Model {

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'email'],
    };
  }

  static get relationMappings() {
    return {
      instructor: {
        relation: Model.BelongsToOneRelation,
        modelClass: users,
        join: {
          from: 'users.instructorId',
          to: 'users.id'
        }
      },
      students: {
        relation: Model.HasManyRelation,
        modelClass: users,
        join: {
          from: 'users.id',
          to: 'users.instructorId'
        }
      }
      
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

  db.schema.hasTable('users').then(exists => {
    if (!exists) {
      db.schema.createTable('users', table => {
        table.increments('id');
        table.string('firstName');
        table.string('lastName');
        table.string('address');
        table.string('phone');
        table.string('email');
        table.integer('instructorId');
        table.integer('guardianId');
        table.boolean('isAdmin');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
      })
        .then(() => console.log('Created users table')) // eslint-disable-line no-console
        .catch(e => console.error('Error creating users table', e)); // eslint-disable-line no-console
    }
  })
    .catch(e => console.error('Error creating users table', e)); // eslint-disable-line no-console

  return users;
};
