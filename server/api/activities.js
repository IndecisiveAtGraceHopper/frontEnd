const express = require('express')
const router = express.Router()
const Activity = require('../db/models/activity')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const activities = await Activity.findAll({attributes: ['name', 'date', 'address', 'rating', 'selected', 'upVotes', 'downVotes']})
        res.json(activities)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const properties = {
            name: req.body.name,
            date: req.body.date
        }
        const newActivity = await Activity.create(properties)
        res.json(newActivity)
    } catch (err) {
        next(err)
    }
})

router.use('/:id', async(req, res, next) => {
    try {
        const activity = await Activity.findById(req.params.id, {
            attributes: ['name', 'date', 'address', 'rating', 'selected', 'upVotes', 'downVotes']
        })
        if (activity) {
            req.activity = activity
            next()
        }
        else {
            const err = new Error ('No Activity Found')
            err.status = 404
            next(err)
        }
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(req.activity)
    } catch (err) {
        next(err)
    }
})


router.put('/:id', async (req, res, next) => {
    try {
        const updates = {
            name: req.body.name,
            date: req.body.date,
            address: req.body.address,
            rating: req.body.rating,
            selected: req.body.selected,
            upVotes: req.body.upVotes,
            downVotes: req.body.downVotes
        }
        const updatedActivity = await req.activity.update(updates)
        res.json(updatedActivity)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        req.activity.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
