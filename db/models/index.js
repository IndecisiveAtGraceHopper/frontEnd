const User = require('./user')
const Activity = require('./activity')
const Adventure = require('./adventure')
const Board = require('./board')
const Poll = require('./polls')

//Group is now Adventure.  Event is now Activity.
User.belongsToMany(Adventure, {through: 'pods'})
Adventure.belongsToMany(User, {through: 'pods'})

User.hasMany(Poll)
Poll.belongsTo(User)

Adventure.hasMany(Activity)
Activity.belongsTo(Adventure)

Adventure.hasOne(Board)
Board.belongsTo(Adventure)

module.exports = {
  User, Activity, Adventure, Board, Poll
}
