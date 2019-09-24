// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const polls = sequelizeClient.define('polls', {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    poll_question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    options: {
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
  polls.associate = function (models) {
    models.polls.belongsTo(models.users);
    models.polls.belongsTo(models.events);
  };

  return polls;
};
