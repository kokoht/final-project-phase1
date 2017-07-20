'use strict';

const salt = require('../helpers/salt');
const hash = require('../helpers/hash');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (models) =>{
        const secret = salt();
        const hashData = hash(secret, models.password);
        models.password = hashData;
        models.salt = secret;
      }
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Event, {
      through: 'EventUsers'
    });
  }

  return User;
};
