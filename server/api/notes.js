const express = require('express')
const router = express.Router()
const {Note} = require('../db/note')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', userAuth, async (req, res, next) => {
    try {
        const notes = await Pod.findAll()
        res.json(notes)
    } catch (err) {
        next(err)
    }
})

router.get('/:podId', userAuth, async (req, res, next) => {
    try {
        const note = await Pod.findById(req.params.podId)
        res.json(note)
    } catch (err) {
        next(err)
    }
})
