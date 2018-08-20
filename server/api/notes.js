
const express = require('express')
const router = express.Router()
const Note = require('../db/models/note')
const {userAuth} = require('../api/auth')

module.exports = router

// router.get('/', async (req, res, next) => { // this route doesn't work
//     try {
//         const notes = await Note.findAll()
//         res.json(notes)
//     } catch (err) {
//         next(err)
//     }
// })

// router.get('/:podId', async (req, res, next) => { //this route doesn't make sense
//     try {
//         const note = await Note.findById(req.params.id)
//         res.json(note)
//     } catch (err) {
//         next(err)
//     }
// })

router.post('/', async (req, res, next) => {
    try {
        const newNote = await Note.create(req.body)
        res.json(newNote)
    } catch (err) {
        next(err)
    }
})


router.put('/:id', async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id)
        const updatedNote = await note.update(req.body)
        res.json(updatedNote)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id)
        note.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})

