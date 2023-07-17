const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table to hold Donomons

class Donomon extends Model {}

Donomon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: DataTypes.INTEGER,
            DEFAULT: 1,
            allowNull: false,
        },
        exp: {
            type: DataTypes.INTEGER,
            DEFAULT: 0,
            allowNull: false,
        },
        morality: {
            type: DataTypes.INTEGER,
            DEFAULT: 0,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        references: {
            model: 'donomonType',
            key: 'id',
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'donomon',
    },
);

module.exports = Donomon;