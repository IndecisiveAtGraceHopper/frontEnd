const Sequelize = require('sequelize')
const db = require('../db')

const Board = db.define('board', {
  notes: {
    type: Sequelize.TEXT,
    defaultValue: false
  }
})

module.exports = Board
