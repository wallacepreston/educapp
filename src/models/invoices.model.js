// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');
const User = require('./users.model');
const Session = require('./sessions.model');

class Invoice extends Model {

  static get tableName() {
    return 'invoices';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],

      properties: {
        text: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    this.createdAt = this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      instructor: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'invoices.instructorId',
          to: 'users.id'
        }
      },
      guardian: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'invoices.guardianId',
          to: 'users.id'
        }
      },
      students: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          to: 'invoices.studentId'
        }
      },
      session: {
        relation: Model.BelongsToOneRelation,
        modelClass: Session,
        join: {
          from: 'invoices.sessionId',
          to: 'sessions.id'
        }
      }
      
    };
  }  
}

module.exports = Invoice; 
