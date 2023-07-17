const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const QuestionAnswer = require('./QuestionAnswer');
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

module.exports = { Question, Answer, QuestionAnswer };
