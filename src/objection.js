const { Model } = require('objection');

module.exports = function (app) {
  const { client, connection } = app.get('postgres');
  const knex = require('knex')({ 
    client, 
    connection, 
    useNullAsDefault: false,
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    }
  });

  Model.knex(knex);

  app.set('knex', knex);
};
