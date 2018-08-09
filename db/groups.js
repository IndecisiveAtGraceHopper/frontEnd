const Sequelize = require('sequelize')
const db = require('../db')

const Group = db.define('group', {
  date: {
    type: Sequelize.DATE,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  },
})
