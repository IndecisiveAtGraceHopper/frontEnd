const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
  name: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  },
})

module.exports = Group
