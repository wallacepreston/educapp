exports.up = knex => {
  return knex.schema
    .createTable('invoices', table => {
      table.increments('id').primary();
      table.integer('sessionId');
      table.integer('instructorId');
      table.integer('studentId');
      table.integer('guardianId');
      table.timestamp('sentOnDate');
      table.boolean('isPaid');
      table.string('paymentMethod');
      table.string('description');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    });
};

exports.down = knex => {
  return knex.schema
    .dropTableIfExists('invoices');
};