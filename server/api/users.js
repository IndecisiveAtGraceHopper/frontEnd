const express = require('express')
const router = express.Router()
const {Poll, User} = require('../db/models')
const {userAuth} = require('../api/auth')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll() 
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

//search by firstName
router.get('/search/name/:userName', async (req, res, next) => {
  try {
    let users = await User.findAll({where: {
      firstName : req.params.userName
    }})
    if (users.length > 0) res.json(users)
    else res.json('No registered users found with that name')
  } catch (err) {
    next(err)
  }
})

//search by email
router.get('/search/name/:email', async (req, res, next) => {
  try {
    let user = await User.findOne({where: {
      email: req.params.email
    }})
    if (user) res.json(user)
    else res.json('No registered user found with that email')
  } catch (err) {
    next(err)
  }
})

//search by phone
router.get('/search/name/:phone', async (req, res, next) => {
  try {
    let user = await User.findOne({where: {
      phone: req.params.phone
    }})
    if (user) res.json(user)
    else res.json('No registered user found with that phone number')
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

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const updatedUser = await user.update(req.body)
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})

module.exports = router;



