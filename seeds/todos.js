exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'taskValue1', priority: 1, category: 'home', is_complete: false, due_at: 1551096000 },
        { id: 2, task: 'taskValue2', priority: 2, category: 'garden', is_complete: false, due_at: 1551096000 },
        { id: 4, task: 'taskValue3', priority: 4, category: 'food', is_complete: false, due_at: 1551096000 },
        { id: 5, task: 'taskValue3', priority: 5, category: 'drink', is_complete: false, due_at: 1551096000 },
        { id: 6, task: 'taskValue3', priority: 3, category: 'food', is_complete: false, due_at: 1551096000 },
        { id: 7, task: 'taskValue3', priority: 2, category: 'comic', is_complete: false, due_at: 1551096000 },
        { id: 8, task: 'taskValue3', priority: 3, category: 'home', is_complete: false, due_at: 1551096000 },
        { id: 9, task: 'taskValue3', priority: 4, category: 'drink', is_complete: false, due_at: 1551096000 },
        { id: 10, task: 'taskValue3', priority: 5, category: 'comic', is_complete: false, due_at: 1551096000 }
      ]);
    });
};