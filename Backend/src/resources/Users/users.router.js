const { Router } = require("express");
const userController = require("./users.controller");
const { body } = require('express-validator');

const router = Router();

router
    .route("/")
    .get(userController.getAll)
router
    .route('/:id')
    .get(userController.get)
    .delete(userController.remove)
    .patch(
        body('password').optional().matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"),
        body('email').optional().isEmail(),
        body('phone').optional().matches("\\d{9}").isLength({min: 9, max: 9}),
        userController.update)

router
    .route('/ticket/:id')
    .get(userController.getUserByTicket)

module.exports = router;