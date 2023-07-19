const router = require('express').Router();
const { Answer, Donomon, Question, QuestionAnswer } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
})

router.get('/adventure', /*withAuth, */async (req, res) => {

    // Get all Questions


    // Get all Answers


    // Add { questions, answers } to render
    res.render('adventure');
});

router.get(
    '/adventure',
    /*withAuth, */ async (req, res) => {
        res.render('adventure');
    }
);
router.get(
    '/profile',
    /*withAuth, */ async (req, res) => {
        const donomonData = await Donomon.findAll({
            where: {
                userId: req.session.userId,
            },
        });
        const donomons = donomonData.map((donomon) =>

            donomon.get({ plain: true })
        );
        const username = req.session.username;
        res.render('profile', { donomons, username });
    }
);

// router.get('/character/:id', /*withAuth, */async (req, res) => {
//     const donomonData = await Donomon.findByPk(req.params.id, {

//     });

//     res.render('donomon');
// });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

module.exports = router;
