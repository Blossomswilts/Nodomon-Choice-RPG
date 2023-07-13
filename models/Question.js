const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table for questions
class Question extends Model {}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
            },
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'question',
        }
    );

module.exports = Question;

