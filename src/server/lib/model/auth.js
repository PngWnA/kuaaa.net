import { Sequelize } from "sequelize/types";

export default (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sid: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
        },
        email: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1,
        },
    });

    Users.associate = models => {
        Users.hasMany(models.Boards);
        Users.hasMany(models.Articles);
        Users.hasMany(models.Comments);
    };

    return Users;
};