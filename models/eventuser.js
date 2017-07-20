'use strict';
module.exports = function(sequelize, DataTypes) {
  var EventUser = sequelize.define('EventUser', {
    EventId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  });

  EventUser.associate = (models) => {
    EventUser.belongsTo(models.Event);
    EventUser.belongsTo(models.User);
  }
  
  return EventUser;
};
