const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a table for questions answers value of answer and experience 
class QuestionAnswer extends Model {}

QuestionAnswer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        questions: {
            type: DataTypes.STRING,
            references: {
                model: 'question',
                key: 'id',
                },
            },
        answers: {
            type: DataTypes.STRING,
            references: {
                model: 'answer',
                key: 'id',
                },
            },
        answer_value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            },
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'question_answer',
        }
);

module.exports = QuestionAnswer;

