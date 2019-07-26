/* eslint-disable no-console */
const app = require('./app');
const glob = require('glob');

// Create array of all seed files in the `./seeds/` directory
const seedsArr = glob.sync('**/seeds/*.json')
  .map(path => ({
    name: path.slice(10, path.length-5),
    location: '.' + path.slice(3)
  }));

console.log('Seed Files: ', seedsArr);

const seed = async obj => {
  const seedFile = require(obj.location);
  try {
    await Promise.all(seedFile.map(() => app.service(obj.name).remove(null)));
    console.log(`Destroyed all ${obj.name}!`);
  } catch(err) {
    console.error(err);
  }
  try {
    await Promise.all(seedFile.map(row => app.service(obj.name).create(row)));
    console.log(`Seeding ${obj.name} succeeded!`);
  } catch(err) {
    console.error(err);
  }
};

seedsArr.map(seedObj => seed(seedObj));
