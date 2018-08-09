const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  notes: {
    type: Sequelize.TEXT,
    defaultValue: false
  }
})

module.exports = Note
