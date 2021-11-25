const { Router } = require("express");
const userController = require("./users.controller");
const router = Router();

router
    .route("/")
    .get(userController.getAll)
router
    .route('/:id')
    .get(userController.get)
    .delete(userController.remove)
    .patch(userController.update)

router
    .route('/ticket/:id')
    .get(userController.getUserByTicket)

module.exports = router;