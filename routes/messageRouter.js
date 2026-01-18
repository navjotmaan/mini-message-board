const { Router } = require('express');
const messageRouter = Router();
const messages = require('../data/messages');

messageRouter.get('/', (req, res) => {
    res.render('form');
});

messageRouter.post('/', (req, res) => {
    const { name, message } = req.body;

    messages.push({ text: message, user: name, added: new Date() });
    res.redirect('/');
});

module.exports = messageRouter;