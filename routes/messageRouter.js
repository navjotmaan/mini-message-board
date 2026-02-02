const { Router } = require('express');
const messageRouter = Router();
const { body } = require('express-validator');

const messageController = require('../controller/messageController');

const validateMessage = [
  body('name').trim()
    .isLength({ min: 1, max: 20 }).withMessage('Name must be between 1 and 20 characters'),
  body('message').trim()
    .isLength({ min: 1, max: 200 }).withMessage('Message must be between 1 and 200 characters')
];

messageRouter.get('/', messageController.getForm);
messageRouter.post('/', validateMessage, messageController.postMessage);

module.exports = messageRouter;