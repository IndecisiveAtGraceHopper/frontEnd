const router = require('express').Router()
const {User, Pod, Adventure, Activity} = require('../db/models')
module.exports = router

router.post('/login', async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {email: req.body.email},
            include: [{model: Pod}]
        })
        if (!user) {
            console.log('No user found with email', req.body.email)
            res.status(401).send('Invalid login credentials')
        } else if (!user.correctPassword(req.body.password)) {
            console.log('Incorrect password')
            res.status(401).send('Invalid login credentials')
        } else {
            req.login(user, err => (err ? next(err) : res.json(user)))
        }        
    } catch(err) {
        next(err)
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).send()
    } catch(err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(401).send('User already exists')
        } else {
            next(err)            
        }
    }
})

router.post('/logout', (req, res) => {
    req.logout()
    req.session.destroy()
    res.redirect('/')
})

router.get('/me', async (req, res) => {
    res.json(req.user)
})

router.use('/google', require('./google'))