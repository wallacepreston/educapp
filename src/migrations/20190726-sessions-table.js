exports.up = knex => {
  return knex.schema
    .hasTable('sessions').then((exists) => {
      if(!exists) {
        return knex.schema.createTable('sessions', table => {
          table.increments('id');
          table.integer('instructorId');
          table.integer('studentId');
          table.timestamp('date');
          table.float('hours');
          table.text('description');
          table.string('location');
          table.timestamp('createdAt');
          table.timestamp('updatedAt');
        });
      }
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('sessions');
};