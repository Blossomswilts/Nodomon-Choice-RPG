// const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const QuestionAnswer = require('./QuestionAnswer');

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

module.exports = { Question, Answer, QuestionAnswer };
