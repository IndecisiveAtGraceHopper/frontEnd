const Sequelize = require('sequelize')
const db = require('../db')

const UserPod = db.define('user_pods', {})

module.exports = UserPod