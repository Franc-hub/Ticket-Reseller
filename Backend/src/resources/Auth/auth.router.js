const { Router } = require('express');
const authController = require('./auth.controller');
const router = Router();

router
    .route('/login')
    .post(authController.login);
router

    .route('/signup')
    .post(authController.signUp)



module.exports = router;