const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const QuestionAnswer = require('./QuestionAnswer');

Question.hasMany(Answer, {
    through: {
        model: QuestionAnswer,
        unique: false,
    },
    as: 'answers'
});

Answer.belongsToMany(Question, {
    through: {
        model: QuestionAnswer,
        unique: false,
    },
    as: 'questions'
});

module.exports = {Question, Answer, QuestionAnswer };

