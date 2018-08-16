const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Pod = require('../db/models/pod')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = router


router.get('/', async (req, res, next) => {
    try {
      let podId = 1
      let coordinatorId = 5

      const users = await User.findAll({
        where: {
          id: {
          [Op.ne]: coordinatorId
          //userId is not equal to coordinatorId
        }
      },
        include: [{
          model: Pod,
          attributes: ['id'],
          where: {
            id: podId
          }
        }],
      })
      res.json(users)
    } catch (err) {
        next(err)
    }
})
