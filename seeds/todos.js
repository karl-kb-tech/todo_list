exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'Sleep', priority: 1, category: 'home', is_complete: false, due_at: 1551096000 },
        { id: 2, task: 'Plant stuff', priority: 2, category: 'garden', is_complete: true, due_at: 1551096000 },
        { id: 4, task: 'Eat McD', priority: 4, category: 'food', is_complete: false, due_at: 1551096000 },
        { id: 5, task: 'Drink Beer', priority: 5, category: 'drink', is_complete: false, due_at: 1551096000 },
        { id: 6, task: 'Eat donut', priority: 3, category: 'food', is_complete: false, due_at: 1551096000 },
        { id: 7, task: 'Read Batman', priority: 2, category: 'comic', is_complete: false, due_at: 1551096000 },
        { id: 8, task: 'Go Home', priority: 3, category: 'home', is_complete: false, due_at: 1551096000 },
        { id: 9, task: 'Drink Beer', priority: 4, category: 'drink', is_complete: false, due_at: 1551096000 },
        { id: 10, task: 'Read Deadpool', priority: 5, category: 'comic', is_complete: false, due_at: 1551096000 },
        { id: 11, task: 'Should find a job', priority: 4, category: 'work', is_complete: true, due_at: 1551096000 },
        { id: 13, task: 'Send a CV', priority: 4, category: 'work', is_complete: false, due_at: 1551096000 },
        { id: 14, task: 'Feed cat', priority: 3, category: 'pets', is_complete: false, due_at: 1551096000 },
        { id: 15, task: 'Feed fat cat', priority: 3, category: 'pets', is_complete: false, due_at: 1551096000 },
        { id: 16, task: 'Feed really fat cat', priority: 3, category: 'pets', is_complete: false, due_at: 1551096000 }
      ]);
    });
};