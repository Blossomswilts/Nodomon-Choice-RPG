const router = require('express').Router();

const usersRoutes = require('./user-routes');
const questionsRoutes = require('./question-routes');

router.use('/users', usersRoutes);
router.use('/questions', questionsRoutes);

module.exports = router;


