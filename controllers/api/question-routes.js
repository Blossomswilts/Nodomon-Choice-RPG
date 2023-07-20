const router = require('express').Router();
const { Answer, Question, QuestionAnswer } = require('../../models');
const sequelize = require('../../config/connection');

const withAuth = require('../utils/auth');
router.get('/random', withAuth, async (req, res) => {
    const randomQuestion = (
        await Question.findAll({
            attributes: ['id', 'text'],
            include: [
                {
                    model: Answer,
                    through: {
                        model: QuestionAnswer,
                        attributes: [],
                    },
                    as: 'answer',
                    attributes: ['id', 'text'],
                },
            ],
            order: sequelize.literal('rand()'),
            limit: 1,
        })
    )[0];
    const randomQuestionPlain = randomQuestion.get({ plain: true });
    res.json(randomQuestionPlain);
});
module.exports = router;
