const pkg = require('./package.json');
console.log(process.env.DATABASE_URL)
module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL || {
      database: pkg.name,
    },
    migrations: {
      directory: __dirname + '/src/migrations',
    },
    seeds: {
      directory: __dirname + '/src/seeds'
    },
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
  } 
};
