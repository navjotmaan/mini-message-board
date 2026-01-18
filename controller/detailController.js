const messages = require('../data/messages');

exports.showDetail = (req, res) => {
    const id = req.params.id;
    const message = messages[id]; 
    
    if (message) {
        res.render('message', { title: 'Mini messageboard | message', message }); 
    } else {
        res.status(404).send('Message not found');
    }
};