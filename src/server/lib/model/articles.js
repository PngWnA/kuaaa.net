module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define('Articles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        boardTag: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        },
        isProtected: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
        }
    });
    return Articles;
};