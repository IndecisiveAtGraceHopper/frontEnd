const db = require('../db')
const Sequelize = require('sequelize')

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  },
  address: {
    type: Sequelize.STRING
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  },
  selected: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  upVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate:{
      min: 0
    }
  },
  downVotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
}, {
  hooks: {
    afterUpdate: async (instance)=> {
      if (instance.selected === true){
        try{
          const activities = await Activity.findAll({where: {adventureId: instance.adventureId}})
          activities.map(activity=> activity.id !== instance.id && activity.destroy() )
        } catch(err){
          console.log('error in activity hook', err)
        }
      }
    }
  }
});

module.exports = Activity
