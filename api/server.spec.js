const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig.js');

//cleans up database
beforeEach(()=> {
  return db('gamesTest').truncate();
});

  describe('The Server', () => {
    it('should set testing environment', () => {
      const env = process.env.DB_ENV;

      expect(env).toBe('testing');
    });

  describe('Get /games', () => {
    it ('should respond with an empty array when there are no games', async () => {
      const res = await request(server).get('/games');

      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body).toEqual([]);
    });

    it ('should respond with all games in the db', async () => {
      await db('gamesTest').insert([
        { title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
        { title: 'Donkey Kong', genre: 'Arcade', releaseYear: 1995 }
      ]);

      const res = await request(server).get('/games');
      const data = res.body;

      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
      expect(res.body.length).toEqual(2);
      expect(data[0].title).toBe('Pacman');
      expect(data[0].id).toBe(1);
      })
    }); // get/games end point

  describe('Insert /games route', () => {
    it('Route should respond with a 500 error if there is an error in the system or no data is added', async() =>{
      const res = await request(server).post('/games');
      expect(res.status).toBe(500);
    })
  })
});
