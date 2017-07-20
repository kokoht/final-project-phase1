'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    ticket_price: DataTypes.STRING,
    venue: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.STRING
  });

  Event.associate = (models) => {
    Event.belongsToMany(models.User, {
      through: 'EventUsers'
    });
  }

  return Event;
};
