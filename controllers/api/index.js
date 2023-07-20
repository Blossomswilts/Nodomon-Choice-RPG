const router = require('express').Router();

const donomonsRoutes = require('./donomon-routes');
const usersRoutes = require('./user-routes');
const questionsRoutes = require('./question-routes');

router.use('/donomons', donomonsRoutes);
router.use('/questions', questionsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
