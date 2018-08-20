const express = require('express')
const router = express.Router()
const Activity = require('../db/models/activity')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            attributes: [name, date, address, rating, selected, upVotes, downVotes]
        })
        res.json(activities)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        console.log('req.name', req.activity.name)
        const properties = {
            name: req.name,
            date: req.date, 
            address: req.address,
            rating: req.rating,
            selected: req.selected,
            upVotes: req.upVotes,
            downVotes: req.downVotes
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
            attributes: [name, date, address, rating, selected, upVotes, downVotes]
        })
        console.log('activity', activity)
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
        const activity = await Activity.findById(req.params.id, {
            attributes: [name, date, address, rating, selected, upVotes, downVotes]
        })
        console.log('activity', activity)
        res.json(activity)
    } catch (err) {
        next(err)
    }
})


router.put('/:id', async (req, res, next) => {
    try {
        const updates = {
            name: req.name,
            date: req.date,
            address: req.address,
            rating: req.rating,
            selected: req.selected,
            upVotes: req.upVotes,
            downVotes: req.downVotes,
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
