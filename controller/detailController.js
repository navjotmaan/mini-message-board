const db = require('../db/queries');

exports.showDetail = async (req, res) => {
    const id = req.params.id;
    
    try {
        const result = await db.getMessageById(id);
        const message = result.rows[0];

        if (message) {
            res.render('message', { 
                title: 'Mini messageboard | message', 
                message: message 
            }); 
        } else {
            res.status(404).send('Message not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
    
};