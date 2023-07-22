const router = require('express').Router();
const { Donomon, DonomonType } = require('../models');
const withAuth = require('../utils/auth');
const http = require('http');
const WebSocket = require('ws');

const server = http.createServer(express);
const wss = new WebSocket.Server({ server });

router.get('/', async (req, res) => {
    res.render('homepage');
});

const retrieveDonomons = async (userId, retrieveDonomons, retrieveTypes) => {
    const returnObj = {};

    if (retrieveDonomons) {
        const donomonData = await Donomon.findAll({
            include: {
                model: DonomonType,
            },
            where: {
                userId,
            },
        });
        returnObj.donomons = donomonData.map((donomon) =>
            donomon.get({ plain: true }),
        );
    }
    if (retrieveTypes) {
        const donomonTypeData = await DonomonType.findAll({
            where: {
                evolution: 1,
            },
        });
        returnObj.types = donomonTypeData.map((donomon) =>
            donomon.get({ plain: true }),
        );
    }
    return returnObj;
};

router.get('/characters', withAuth, async (req, res) => {
    const { donomons, types } = await retrieveDonomons(req.session.userId, true, true);
    res.render('characters', {
        donomons,
        types,
    });
});

router.get('/adventure', withAuth, async (req, res) => {
    const { donomons } = await retrieveDonomons(req.session.userId, true);
    res.render('adventure', {
        donomons,
    });
});

// Websocket connection for receiving messages from the client
router.get('/chat', async (req, res) =>{
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(data) {
            wss.clients.forEach(function each(client) {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/characters');
    } else {
        res.render('login');
    }
});

module.exports = router;
