const db = require('../db')
const Sequelize = require('sequelize')

const Event = db.define('event', {
  date: {
    type: Sequelize.DATE
  },
  address: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  },
  selected: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})


module.exports = Event
