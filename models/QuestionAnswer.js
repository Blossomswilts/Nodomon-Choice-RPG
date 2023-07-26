const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QuestionAnswer extends Model {}

QuestionAnswer.init(
    {
        questionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            references: {
                model: 'question',
                key: 'id',
            },
        },
        answerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
            references: {
                model: 'answer',
                key: 'id',
            },
        },
        answerValue: {
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
        modelName: 'questionAnswer',
    },
);

module.exports = QuestionAnswer;
