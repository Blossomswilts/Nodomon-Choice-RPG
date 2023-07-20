const router = require('express').Router();
const { Donomon, DonomonType } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/profile', withAuth, async (req, res) => {
    const donomonData = await Donomon.findAll({
        where: {
            userId: req.session.userId,
        },
    });
    const donomons = donomonData.map((donomon) => donomon.get({ plain: true }));
    const username = req.session.username;
    res.render('profile', { donomons, username });
});

router.get('/characters', withAuth, async (req, res) => {
    const donomonData = await Donomon.findAll({
        include: {
            model: DonomonType,
        },
        where: {
            userId: req.session.userId,
        },
    });
    const donomonTypeData = await DonomonType.findAll({
        where: {
            evolution: 1,
        },
    });
    const donomons = donomonData.map((donomon) => donomon.get({ plain: true }));
    const types = donomonTypeData.map((donomon) =>
        donomon.get({ plain: true }),
    );
    res.render('characters', {
        donomons,
        types,
    });
});
router.get('/adventure', withAuth, async (req, res) => {
    res.render('adventure');
});
router.get('/profile', withAuth, async (req, res) => {
    const donomonData = await Donomon.findAll({
        where: {
            userId: req.session.userId,
        },
    });
    const donomons = donomonData.map((donomon) => donomon.get({ plain: true }));
    const username = req.session.username;
    res.render('profile', { donomons, username });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/characters');
    } else {
        res.render('login');
    }
});

module.exports = router;
