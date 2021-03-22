const mainRoutes = require('express').Router();
const authRoutes = require('./authRoutes');
const studentRoutes = require('./studentRoutes');

mainRoutes.use('/student', studentRoutes);
mainRoutes.use('/auth',authRoutes);

module.exports = mainRoutes ;