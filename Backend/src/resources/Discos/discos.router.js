const { Router } = require("express");
const discoController = require("./discos.controller");

const router = Router();

router
    .route("/")
    .post(discoController.create)
    .get(discoController.getAll)
router
    .route('/:id')
    .get(discoController.get)
    .delete(discoController.remove)
    
module.exports = router;