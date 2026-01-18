const { Router } = require('express');
const indexRouter = Router();

const indexController = require('../controller/indexController');

indexRouter.get('/', indexController.getIndex);

module.exports = indexRouter;