// slots (1 FK – events.id)
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('slots').del()
    .then(function () {
      return Promise.all([
        // // Inserts seed entries in slots table
        knex('slots').insert({
          date: '2018-02-07', 
          start_time: '17:00:00', 
          end_time: '20:00:00', 
          event_id: (knex.select('id').from('events').where('title', 'midterm demo party'))}),
      ]);
    });
 };