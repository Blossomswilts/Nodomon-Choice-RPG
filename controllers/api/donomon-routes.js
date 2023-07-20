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

// Delete a donomon by its `id` value (for characters page)
router.delete('/:id', async (req, res) => {
    try {
        await Donomon.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.end();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
