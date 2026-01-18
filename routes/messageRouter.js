const { Router } = require('express');
const messageRouter = Router();

const messageController = require('../controller/messageController');

messageRouter.get('/', messageController.getForm);
messageRouter.post('/', messageController.postMessage);

module.exports = messageRouter;