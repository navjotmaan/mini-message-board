const { Router } = require('express');
const indexRouter = Router();
const messages = require('../data/messages');

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = indexRouter;