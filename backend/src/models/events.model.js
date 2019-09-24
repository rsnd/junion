// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const events = sequelizeClient.define('events', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    event_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    event_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_passcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  events.associate = function (models) {
    models.events.belongsTo(models.users);
  };

  return events;
};
