module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        articleID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        replyID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
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
    });
    return Comments;
};