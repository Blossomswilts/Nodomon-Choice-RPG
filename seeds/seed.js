const sequelize = require('../config/connection');
const { Question, Answer, QuestionAnswer } = require('../models');

const questionData = require('./Questions.json');
const answerData = require('./Answer.json');
const questionAnswerData = require('./questionAnswer.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Question.bulkCreate(questionData);

    await Answer.bulkCreate(answerData);

    await QuestionAnswer.bulkCreate(questionAnswerData);

    process.exit(0);
};

seedDatabase();