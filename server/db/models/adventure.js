const Sequelize = require('sequelize')
const db = require('../db')

const Adventure = db.define('adventure', {
  name: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});

module.exports = Adventure
