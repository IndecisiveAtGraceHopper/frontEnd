const express = require('express')
const router = express.Router()
const {Poll, User} = require('../db/models')
const {userAuth} = require('../api/auth')

/* GET users listing. */
router.get('/', userAuth, async (req, res, next) => {
  try {
    const users = await User.findAll() 
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', userAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

//poll routes should be moved to polls.js
router.get('/poll', function(req, res, next) {
  res.send('hello')
})

router.post('/poll', async (req, res, next) => {
  const newPoll = await Poll.create(req.body)
  res.status(201).send(newPoll)
})

module.exports = router;



