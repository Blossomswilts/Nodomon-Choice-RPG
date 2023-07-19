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
<<<<<<< HEAD
<<<<<<< HEAD
        // Get all Questions

        // Get all Answers

        // Add { questions, answers } to render
        res.render('adventure');
    },
=======
        res.render('adventure');
    }
>>>>>>> ff922715ab6920f4d8b19d4d0956cdf0a60a4be6
=======
        res.render('adventure');
    }
>>>>>>> 2dbf886cf633338a00d1fad4f009ef1c489e2f72
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
<<<<<<< HEAD
<<<<<<< HEAD
            donomon.get({ plain: true }),
        );
        const username = req.session.username;
        res.render('profile', { donomons, username });
    },
=======
=======

>>>>>>> 2dbf886cf633338a00d1fad4f009ef1c489e2f72
            donomon.get({ plain: true })
        );
        const username = req.session.username;
        res.render('profile', { donomons, username });
    }
<<<<<<< HEAD
>>>>>>> ff922715ab6920f4d8b19d4d0956cdf0a60a4be6
=======
>>>>>>> 2dbf886cf633338a00d1fad4f009ef1c489e2f72
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
