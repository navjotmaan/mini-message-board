const messages = require('../data/messages');

exports.getForm = (req, res) => {
    res.render('form', { title: 'Mini Messageboard | New'});
};

exports.postMessage = (req, res) => {
    const { name, message } = req.body;

    messages.push({ 
        text: message, 
        user: name, added: 
        new Date().toLocaleString()
    });

    res.redirect('/');
};