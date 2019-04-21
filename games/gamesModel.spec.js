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

    it('should return an id and a title', async () => {
      const game = await Games.insert({ title: 'Spiderman', genre: 'Action', releaseYear: 2016 })

      expect(game.id).toBe(1);
      expect(game.title).toBe('Spiderman')
    });

  }); //describe insert function

  describe('the GetAll Fn', () => {
    it('should return an array if there are data', async () => {
      await db('gamesTest').insert([
        {title: 'Crash Bandicoot', genre: 'Adventure', releaseYear: 1994},
        {title: 'Spyro', genre: 'Adventure', releaseYear: 1994},
        {title: 'Twisted Metal', genre: 'Arcade', releaseYear: 1990}
      ]);

      const games = await Games.getAll();

      expect(games.length).toBe(3);
      expect(games[0]).toEqual({
        id: 1, title: 'Crash Bandicoot', genre: 'Adventure', releaseYear: 1994
      });

    });

  }); // describe get all fn

}); //main describe
