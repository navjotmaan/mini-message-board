const db = require('../db/queries');

exports.getForm = (req, res) => {
    res.render('form', { title: 'Mini Messageboard | New'});
};

exports.postMessage = async (req, res) => {
    try {
        await db.insertMessage(req.body.name, req.body.message);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving message");
    }
};