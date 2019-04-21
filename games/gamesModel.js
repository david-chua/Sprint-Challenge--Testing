const db = require('../data/dbConfig.js');

module.exports ={
  getAll,
  insert
}

async function insert(game){
  const [id]  = await db('gamesTest').insert(game);

  return db('gamesTest').where({ id }).first();
}

function getAll(){
  return db('gamesTest');
}
