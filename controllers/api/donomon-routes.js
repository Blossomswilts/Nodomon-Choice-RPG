const router = require('express').Router();
const { Donomon } = require('../../models');

router.post('/', async (req, res) => {
    try {
        await Donomon.create({
            userId: req.session.userId,
            donomonTypeId: req.body.donomonTypeId,
        });

        res.end();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
