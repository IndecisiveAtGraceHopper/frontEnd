const Sequelize = require('sequelize')
const db = require('../db')

const Poll = db.define('poll', {
  location: {
    type: Sequelize.STRING
  },
  selectedCategory: {
    type: Sequelize.STRING
  },
  priceRange: {
    type: Sequelize.STRING
  }
})

module.exports = Poll
