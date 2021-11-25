const { Router } = require("express");
const transactionsController = require("./transactions.controller");

const router = Router();

router
    .route("/")
    .get(transactionsController.getAll)
router
    .route('/:id')
    .get(transactionsController.get)
    .delete(transactionsController.remove)

    router
    .route('/:buyerId/:ticketId')
    
module.exports = router;