const express = require('express')
const router = express.Router()
const {Adventure} = require('../db/models')
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

router.get('/:id', async (req, res, next) => {
    try {
        const adventure = await Adventure.findById(req.params.id)
        res.json(adventure)
    } catch (err) {
        next(err)
    }
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
        const adventure = await Adventure.findById(req.params.id)
        const updatedAdventure = await adventure.update(req.body)
        res.json(updatedAdventure)
    } catch (err) {
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
