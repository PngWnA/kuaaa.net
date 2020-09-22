module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    digest: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    isOauth2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
  });
  return Auth;
};
