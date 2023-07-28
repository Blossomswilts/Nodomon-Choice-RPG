const router = require('express').Router();
const { Answer, Question, QuestionAnswer, Donomon, DonomonType } = require('../../models');
const sequelize = require('../../config/connection');

const withAuth = require('../../utils/auth');
const { levelUp } = require('../../utils/helpers');

//get random question
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

//get answer values from questionanswer table and update donomon
router.get('/:questionId/answers/:answerId', async (req, res) => {
    try {
        const answerData = await QuestionAnswer.findOne({
            where: {
                questionId: req.params.questionId,
                answerId: req.params.answerId
            }
        });
        const donomon = await Donomon.findByPk(req.session.activeDonomonId);
        const donomonPlain = donomon.get({ plain: true });
        donomonPlain.morality += answerData.answerValue;
        donomonPlain.exp += answerData.experience;
        const updatedDonomon = await levelUp(donomonPlain);
        await Donomon.update(updatedDonomon, {
            where: { id: req.session.activeDonomonId,},
        });
        const donomonName = await Donomon.findOne({
            attributes: ['donomontype.name'],
            where: {id: req.session.activeDonomonId,},
            include: DonomonType,
        });
        const donomonNewPlain = donomonName.get({ plain: true });
        const name = donomonNewPlain.donomontype.name;
        res.json({updatedDonomon, name});
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;