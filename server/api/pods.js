const express = require('express')
const router = express.Router()
const {Pods} = require('../db/models')
const {userAuth} = require('../api/auth')

module.exports = pods

router.get('/', userAuth, async (req, res, next) => {
    try {
        const pods = await Pod.findAll()
        res.json(pods)
    } catch (err) {
        next(err)
    }
})

router.get('/:podId', userAuth, async (req, res, next) => {
    try {
        const pod = await Pod.findById(req.params.podId)
        res.json(pod)
    } catch (err) {
        next(err)
    }
})

router.post('/', userAuth, async (req, res, next) => {
    try {
        const newPod = await Pod.create(req.body)
        res.json(newPod)
    } catch (err) {
        next(err)
    }
})

router.put('/:podId', userAuth, async (req, res, next) => {
    try {
        const pod = await Pod.findById(req.params.podId)
        const updatedPod = await pod.update(req.body)
        res.json(updatedPod)
    } catch (err) {
        next(err)
    }
})

router.delete('/:podId', userAuth, async (req, res, next) => {
    try {
        const pod = await Pod.findById(req.params.podId)
        pod.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
