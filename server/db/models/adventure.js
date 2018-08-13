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
  },
  totalCount: {
    type: Sequelize.INTEGER
  },
  counter: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Adventure
