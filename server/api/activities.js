const express = require('express')
const router = express.Router()
const {Activity} = require('../db/models')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const activities = await Activity.findAll()
        res.json(activities)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const activity = await Activity.findById(req.params.id)
        res.json(activity)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newActivity = await Activity.create(req.body)
        res.json(newActivity)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const activity = await Activity.findById(req.params.id)
        const updatedActivity = await activity.update(req.body)
        res.json(updatedActivity)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const activity = await Activity.findById(req.params.id)
        activity.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
