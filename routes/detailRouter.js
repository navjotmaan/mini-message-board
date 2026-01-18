const { Router } = require('express');
const detailRouter = Router();

const detailController = require('../controller/detailController');

detailRouter.get('/:id', detailController.showDetail);

module.exports = detailRouter;