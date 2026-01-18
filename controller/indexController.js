const messages = require('../data/messages');

exports.getIndex = (req, res) => {
    res.render('index', { title: 'Mini Messageboard', messages });
};