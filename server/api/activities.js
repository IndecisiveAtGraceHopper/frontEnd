const express = require('express')
const router = express.Router()
const Activity = require('../db/models/activity')

module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const activities = await Activity.findAll()
        res.json(activities)
    } catch (err) {
        next(err)
    }
})

router.use('/:id', async(req, res, next) => {
    try {
      const activity = await Activity.findById(req.params.id)
      if(activity){
        req.activity = activity
        next()
      }
      else {
        const err = new Error ('No Activity Found')
        err.status = 404
        next(err)
      }
    }
    catch(err) {
      next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    res.json(req.activity)
})

// router.post('/', async (req, res, next) => {
//     try {
//         const newActivity = await Activity.create(req.body)
//         res.json(newActivity)
//     } catch (err) {
//         next(err)
//     }
// })

// router.put('/:id', async (req, res, next) => {
//     try {
//         const updatedActivity = await req.activity.update(req.body)
//         res.json(updatedActivity)
//     } catch (err) {
//         next(err)
//     }
// })

// router.delete('/:id', async (req, res, next) => {
//     try {
//         req.activity.destroy()
//         res.sendStatus(204)
//     } catch (err) {
//         next(err)
//     }
// })
