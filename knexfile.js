const pkg = require('./package.json');

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      database: pkg.name,
    },
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    },
    production: {
      client: 'pg',
      useNullAsDefault: true,
      connection: {
        database: pkg.name,
      },
      migrations: {
        directory: __dirname + '/src/migrations',
      },
      seeds: {
        directory: __dirname + '/src/seeds'
      }
      // useNullAsDefault: true,
      // debug: true,
    } 
  }
};