
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, task: 'taskValue1' },
        { id: 2, task: 'taskValue2' },
        { id: 3, task: 'taskValue3' },
        { id: 3, task: 'taskValue3' },
        { id: 3, task: 'taskValue3' },
        { id: 3, task: 'taskValue3' },


      ]);
    });
};
