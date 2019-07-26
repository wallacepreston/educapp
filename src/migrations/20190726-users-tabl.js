exports.up = knex => {
  return knex.schema
    .hasTable('users').then((exists) => {
      if(!exists) {
        return knex.schema.createTable('users', table => {
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
        });
      }
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('users');
};