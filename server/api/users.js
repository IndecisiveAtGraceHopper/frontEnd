const express = require('express');
const router = express.Router();
const {Poll, User} = require('../db/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    const users = User.findAll() 
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
});


//poll routes should be moved to polls.js
router.get('/poll', function(req, res, next) {
  res.send('hello')
})

router.post('/poll', async (req, res, next) => {
  const newPoll = await Poll.create(req.body)
  res.status(201).send(newPoll)
})

module.exports = router;



