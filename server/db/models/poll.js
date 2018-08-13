const Sequelize = require('sequelize')
const db = require('../db')

const Poll = db.define('poll', {
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
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
    afterUpdate: async (poll) => {
      let groupPolls = await Poll.findAll({where: {
        adventureId: poll.adventureId
      }})
      for (let i = 0; i < groupPolls.length; i++) {
        if (groupPolls[i].hungerLevel === null) {
          return false
        }
      }

    }
  }
});

module.exports = Poll;
