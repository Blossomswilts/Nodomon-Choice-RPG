const router = require('express').Router();
const { Donomon } = require('../../models');

router.post('/create', async (req, res) => {
    const newDonomon = await Donomon.create(req.body);
});

module.exports = router;