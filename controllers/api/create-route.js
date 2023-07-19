router.post('/create', async (req, res) => {
    const newDonomon = await Donomon.create(req.body);
});