// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const messages = sequelizeClient.define('messages', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    annonymous: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    upvotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    downvotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    replies: {
      type: DataTypes.JSONB,
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
  messages.associate = function (models) {
    models.messages.belongsTo(models.users);
    models.messages.belongsTo(models.events);
  };

  return messages;
};
