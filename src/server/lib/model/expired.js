module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define('Expired', {
    token: {
      type: DataTypes.STRING,
    },
  }, {
    freezeTableName: true,
  });
  return Boards;
};
