const Sequelize = require('sequelize')
const db = require('../db')

const Pod = db.define('pods', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Pod
