const { Router } = require('express');
const ticketsController = require('./tickets.controller');
const { body } = require('express-validator');

const router = Router();

router
    .route('/')
    .get(ticketsController.getAll)


router
    .route('/:id')
    .get(ticketsController.getOne)
    // .put(ticketsController.update)
    .delete(ticketsController.deleteOne);

router
    .route('/user/:id/disco/:id')
    .post(
        body('event').exists().isString(),
        body('reference').exists().isString(),
        body('price').exists().isNumeric(),
        body('date').exists().isDate(),
        ticketsController.create)

module.exports = router;