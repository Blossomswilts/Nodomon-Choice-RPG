const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const QuestionAnswer = require('./QuestionAnswer');
const Donomon = require('./Donomons');
const DonomonType = require('./DonomonType');
// This sets up questions and answers to be associated with each other
Question.belongsToMany(Answer, {
    through: {
        model: QuestionAnswer,
        unique: false,
    },
    as: 'answer',
});

Answer.belongsToMany(Question, {
    through: {
        model: QuestionAnswer,
        unique: false,
    },
    as: 'question',
});

// Set up user to have many donomon (has many donomon)
User.hasMany(Donomon, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Set up donomon to belong to user (belongs to user)
Donomon.belongsTo(User, {
    foreignKey: 'user_id',
});

Donomon.belongsTo(DonomonType, {
    foreignKey: 'donomon_type_id',
});

DonomonType.hasMany(Donomon, {
    foreignKey: 'donomon_type_id',
});

module.exports = {
    Question,
    Answer,
    QuestionAnswer,
    User,
    Donomon,
    DonomonType,
};
