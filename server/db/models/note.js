const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('notes', {
  notes: {
    type: Sequelize.TEXT
  }
});

module.exports = Note;
