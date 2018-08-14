const express = require('express')
const router = express.Router()
const {Note} = require('../db/note')
const {userAuth} = require('../api/auth')

module.exports = router

router.get('/', userAuth, async (req, res, next) => {
    try {
        const notes = await Note.findAll()
        res.json(notes)
    } catch (err) {
        next(err)
    }
})

router.get('/:podId', userAuth, async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.podId)
        res.json(note)
    } catch (err) {
        next(err)
    }
})

router.post('/', userAuth, async (req, res, next) => {
    try {
        const newNote = await Note.create(req.body)
        res.json(newNote)
    } catch (err) {
        next(err)
    }
})

router.put('/:noteId', userAuth, async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.noteId)
        const updatedNote = await note.update(req.body)
        res.json(updatedNote)
    } catch (err) {
        next(err)
    }
})

router.delete('/:noteId', userAuth, async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.noteId)
        note.destroy()
        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
})
