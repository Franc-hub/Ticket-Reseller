const { Router } = require("express");
const discoController = require("./discos.controller");
const { body } = require('express-validator');

const router = Router();

router
    .route("/")
    .post(
        body('name').exists().isString(),
        body('location').exists().isString(),
        discoController.create)
    .get(discoController.getAll)
router
    .route('/:id')
    .get(discoController.get)
    .delete(discoController.remove)
    
module.exports = router;