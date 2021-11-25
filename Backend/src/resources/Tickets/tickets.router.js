const { Router } = require('express');
const ticketsController = require('./tickets.controller');
const router = Router();

router
    .route('/')
    .get(ticketsController.getAll)
    .post(ticketsController.create);

router
    .route('/:id')
    .get(ticketsController.getOne)
    // .put(ticketsController.update)
    .delete(ticketsController.deleteOne);

module.exports = router;