const { Router } = require('express');
const ticketsController = require('./tickets.controller');
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
.post(ticketsController.create)

module.exports = router;