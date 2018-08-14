const express = require('express')
const router = express.Router()
const {Adventure} = require('../db/models')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', userAuth, async (req, res, next) => {
    try {
        const adventures = await Adventure.findAll()
        res.json(adventures)
    } catch (err) {
        next(err)
    }
})

router.get('/:podId', userAuth, async (req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.podId)
        res.json(adventure)
    } catch (err) {
        next(err)
    }
})

router.post('/', userAuth, async (req, res, next) => {
    try {
        const newAdventure = await Adventure.create(req.body)
        res.json(newAdventure)
    } catch (err) {
        next(err)
    }
})

router.put('/:adventureId', userAuth, async (req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.adventureId)
        const updatedAdventure = await adventure.update(req.body)
        res.json(updatedAdventure)
    } catch (err) {
        next(err)
    }
})

router.delete('/:adventureId', userAuth, async (req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.adventureId)
        adventure.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
