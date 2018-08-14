const Sequelize = require('sequelize')
const db = require('../db')
const Adventure = require('./adventure')
const tally = require('../../PollResultsCalculator')
const categories = require('../../categories')
const apiCalls = require('../../call')

const Poll = db.define('poll', {
  latitude: {
    type: Sequelize.FLOAT,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.FLOAT,
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
      try{
          Adventure.increment('counter', {where: {id:poll.adventureId}})
          const adventure = await Adventure.findById(poll.adventureId)
          if (adventure.totalCount < adventure.counter){
            const data = await Poll.findAll({where: {adventureId: poll.adventureId}})
            let results = await tally(data)
            let cats = categories(results)
            apiCalls(cats, results.location, results.priceRange)
          }
       } catch(err) {
        console.log("DANGER DANGER WILL ROBINSON DANGER", err)
       }
    }
  }
});

module.exports = Poll;
