const User = require('./users')
const Activity = require('./activity')
const Adventure = require('./adventure')
const Board = require('./board')
const Poll = require('./polls')
const Pod = require('./pod')

//Group is now Adventure.  Event is now Activity.


Adventure.belongsToMany(Pod, {through: 'pod_adventures'})
Pod.belongsToMany(Adventure, {through: 'pod_adventures'})

User.belongsToMany(Pod, {through: 'user_pods'})
Pod.belongsToMany(User, {through: 'user_pods'})

User.hasMany(Poll)
Poll.belongsTo(User)

Poll.belongsTo(Adventure)

Adventure.hasMany(Activity)
Activity.belongsTo(Adventure)

Adventure.hasOne(Board)
Board.belongsTo(Adventure)

module.exports = {
  User, Activity, Adventure, Board, Poll, Pod
}
