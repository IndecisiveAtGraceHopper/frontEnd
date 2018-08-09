const User = require('./user')
const Event = require('./events')
const Group = require('./grups')
const Board = require('./board')
const Poll = require('./polls')

User.belongsToMany(Group, {through: 'user_groups'})
Group.belongsToMany(User, {through: 'user_groups'})

User.hasMany(Poll)
Poll.belongsTo(User)

Group.hasOne(Event)

Group.hasOne(Board)

module.exports = {
  User, Event, Group, Note, Poll
}
