exports.up = function (knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments('id').primary()
    table.string
  })
};

exports.down = function (knex, Promise) {

};
