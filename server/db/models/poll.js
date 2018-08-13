const Sequelize = require('sequelize')
const db = require('../db')
const Adventure = require('./adventure')

const Poll = db.define('poll', {
  latitude: {
    type: Sequelize.INTEGER,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.INTEGER,
    validate: { min: -180, max: 180 }
  },
  priceRange: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  },
  activityLevel: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  },
  artsyLevel: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  },
  hungerLevel: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  },
  drinkLevel: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 4
    }
  }
}, {
  hooks: {
    afterCreate: async (poll) => {
    Adventure.increment('counter', {where: {id:poll.adventureId}})
    adventure = await Adventure.findById(poll.adventureId)
    }
  }
});

module.exports = Poll;
