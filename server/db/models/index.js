const User = require("./user");
const Activity = require("./activity");
const Adventure = require("./adventure");
const Note = require("./note");
const Poll = require("./poll");
const Pod = require("./pod");

User.belongsTo(Adventure, { as: "coordinator" });

Adventure.belongsToMany(Pod, { through: "pod_adventures" });
Pod.belongsToMany(Adventure, { through: "pod_adventures" });

User.belongsToMany(Pod, { through: "user_pods" });
Pod.belongsToMany(User, { through: "user_pods" });

User.hasMany(Poll);
Poll.belongsTo(User);

Poll.belongsTo(Adventure);

Adventure.hasMany(Activity);
Activity.belongsTo(Adventure);

Adventure.hasOne(Note);
Note.belongsTo(Adventure);

Note.belongsTo(User);

module.exports = {
  User,
  Activity,
  Adventure,
  Note,
  Poll,
  Pod
};
