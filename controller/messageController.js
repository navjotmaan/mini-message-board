const { validationResult } = require('express-validator');
const db = require('../db/queries');

exports.getForm = (req, res) => {
    res.render('form', { title: 'Mini Messageboard | New', errors: [], data: {} });
};

exports.postMessage = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).render('form', {
            title: 'Mini Messageboard | New',
            errors: errors.array(),
            data: req.body 
        });
    }

    try {
        await db.insertMessage(req.body.name, req.body.message);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving message");
    }
};