const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');

Question.hasMany(Answer, {
    foreignKey: 'question_id',
});

Answer.hasMany(Question, {
    foreignKey: 'question_id',
});

