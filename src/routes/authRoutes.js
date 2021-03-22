const authRoutes = require('express').Router();
const authController = require('../controllers/authController');

authRoutes.post("/sign-up", authController.signUp);
authRoutes.post("/sign-In", authController.signIn);

module.exports =authRoutes;