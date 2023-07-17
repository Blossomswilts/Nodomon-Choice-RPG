const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table to hold Donomons to be used in the game

class Donomon extends Model {}

Donomon.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        // Name of the Donomon
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        // Type of the Donomon
        type: {
            type: DataTypes.STRING,
            allowNull: false,
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
