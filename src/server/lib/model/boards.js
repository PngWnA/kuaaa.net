module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define('Boards', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reqLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reqNotice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  });
  return Boards;
};
