const router = require('express').Router();
const { Answer, Question, QuestionAnswer } = require('../../models');
const sequelize = require('../../config/connection');

//const withAuth = require('../utils/auth');

// Sign up route
router.get('/random', /*withAuth,*/ async (req, res) => {
  const randomQuestion = (await Question.findAll({include: [{ model: Answer, through: QuestionAnswer, as: 'answer' }], order: sequelize.literal('rand()'), limit: 1 }))[0];
  const randomQuestionPlain = randomQuestion.get({ plain: true });
  res.json(randomQuestionPlain);
});
  
module.exports = router;