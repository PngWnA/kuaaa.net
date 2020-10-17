module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define('Expired', {
    token: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
  return Boards;
};
