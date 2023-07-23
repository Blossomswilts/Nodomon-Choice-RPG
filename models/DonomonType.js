const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table to hold Donomons to be used in the game

class DonomonType extends Model {}

DonomonType.init(
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
        // Type of the Donomon
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        evolution: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'donomontype',
    },
);

module.exports = DonomonType;
