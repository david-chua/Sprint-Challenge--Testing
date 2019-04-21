const db = require('../data/dbConfig.js');

module.exports ={
  getAll,
  insert,
  remove
}

async function insert(game){
  const [id]  = await db('gamesTest').insert(game);

  return db('gamesTest').where({ id }).first();
}

function getAll(){
  return db('gamesTest');
}

async function remove(id){
  const deletedGame = await db('gamesTest').where({id}).first();
  await db('gamesTest')
    .where('id', id)
    .del()
    return deletedGame
}
