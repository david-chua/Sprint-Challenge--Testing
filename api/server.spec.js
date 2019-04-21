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

});
