const { Router } = require('express');
const ticketsController = require('./Tickets.controller');
const router = Router();

router
.route('/')
.get(ticketsController.getAll)
.post(ticketsController.create);

router
  .route('/:id')
  .get(ticketsController.getOne)
  .put(ticketsController.update)
  .delete(ticketsController.remove);

module.exports = router;