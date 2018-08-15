const express = require('express')
const router = express.Router()
const {Adventure, Activity} = require('../db/models')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const adventures = await Adventure.findAll()
        res.json(adventures)
    } catch (err) {
        next(err)
    }
})

router.use('/:id', async(req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.id)
        if(adventure) {
          req.adventure = adventure
        }
        else {
          res.send('No Adventure')
        }
        next()
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    console.log('here')
    res.json(req.adventure)
})

router.post('/', async (req, res, next) => {
    try {
        const newAdventure = await Adventure.create(req.body)
        res.json(newAdventure)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedAdventure = await req.adventure.update(req.body)
        res.json(updatedAdventure)
    } catch (err) {
        next(err)
    }
})

router.get('/:id/activities', async(req, res, next) => {
    try{
      const activities = await Activity.findAll({where: {adventureId:req.adventure.id}})
      if(activities){
        res.json(activities)
      }
      else{
        res.json('No activities available yet')
      }
    }catch(err){
      next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.id)
        adventure.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
