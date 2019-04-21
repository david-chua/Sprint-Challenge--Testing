const express = require('express');

const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'hello there stranger' });
});

server.get('/games', async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post('/games', async(req,res) =>{
  const newGame = {
    title: req.body.title,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear
  }

  console.log(newGame)
    games
      .insert(newGame)
      .then(response => {
        res.status(200).json(response)
      })
      .catch(err => {
        res.status(422).json({err: 'Internal Server Error: Data not Added'})
      });
})


module.exports = server;
