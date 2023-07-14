const router = require('express').Router();
const { Answer, Question, QuestionAnswer } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage');
})

router.get('/adventure', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    }
    res.render('adventure');
});

router.get('/character', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    }
    res.render('character');
});

router.get('/character/:id', async (req, res) => {
    const donomonData = await Character.findByPk(req.params.id, {

    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});