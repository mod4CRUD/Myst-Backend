const { Router } = require('express');
const { Games } = require('../models/Games.js');

module.exports = Router()
// get all games
  .get('/', async (req, res, next) => {
    try {
      const data = await Games.getGames();
      res.json(data);

    } catch (e) {
      next(e);
    }
  })

// get games by id
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Games.getGameId(req.params.id);
      if (!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  })

// insert into favorite games and catalog
  .post('/', async (req, res, next) => {
    try {
      const data = await Games.insertGame(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
// deletes a games
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Games.deleteGame(req.params.id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
