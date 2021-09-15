
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.string('user').primary().notNullable()
    table.string('password').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
