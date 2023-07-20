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
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false,
        },
        exp: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        morality: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        donomonTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'donomonType',
                key: 'id',
            },
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
