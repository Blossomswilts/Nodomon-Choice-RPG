const sequelize = require('../config/connection');
const { Question, Answer, QuestionAnswer, DonomonType } = require('../models');

const questionData = require('./Questions.json');
const answerData = require('./Answer.json');
const questionAnswerData = require('./questionAnswer.json');
const donomonTypeData = require('./DonomonType.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Question.bulkCreate(questionData);

    await Answer.bulkCreate(answerData);

    await QuestionAnswer.bulkCreate(questionAnswerData);

    await DonomonType.bulkCreate(donomonTypeData);

    process.exit(0);
};

seedDatabase();
