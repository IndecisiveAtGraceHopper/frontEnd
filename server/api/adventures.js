const express = require('express')
const router = express.Router()
const {Adventure} = require('../db/models')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', userAuth, async (req, res, next) => {
    try {
        const adventures = await Pod.findAll()
        res.json(adventures)
    } catch (err) {
        next(err)
    }
})

router.get('/:podId', userAuth, async (req, res, next) => {
    try {
        const adventure = await Pod.findById(req.params.podId)
        res.json(adventure)
    } catch (err) {
        next(err)
    }
})
