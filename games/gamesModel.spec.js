const Games = require('./gamesModel.js');
const db = require('../data/dbConfig.js');

// resets database after each try.
beforeEach(()=> {
  return db('gamesTest').truncate();
});

describe('The Games Model', () => {

  describe('The Insert Fn', () => {
    it("should take in an object in the database that looks like { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 }", async () =>{
      await Games.insert({ title: 'Pacman', genre: 'Arcade', releaseYear: 1980 })

      const games = await db('gamesTest');
      expect(games.length).toBe(1);
      expect(games[0]).toEqual({id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980})
    });

  });

}); //main describe
