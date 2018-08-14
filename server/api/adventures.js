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
