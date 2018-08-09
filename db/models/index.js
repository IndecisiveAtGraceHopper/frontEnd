const User = require('./user')
const Event = require('./events')
const Group = require('./grups')
const Note = require('./notes')
const Poll = require('./polls')

User.belongsToMany(Group, {through: 'user_groups'})
Group.belongsToMany(User, {through: 'user_groups'})



module.exports = {
  User, Event, Group, Note, Poll
}
