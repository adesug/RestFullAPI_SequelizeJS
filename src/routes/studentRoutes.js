const studentRoutes = require ('express').Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require ('../helpers/authMiddleware');

studentRoutes.get('/',authMiddleware.checkLogin, studentController.getAllStudents);
studentRoutes.get('/:id', studentController.getStudentsByID);
studentRoutes.post('/', studentController.createNewStudent);
studentRoutes.put('/:id', studentController.updateStudents);
studentRoutes.delete('/:id', studentController.deleteDataStudent);

module.exports = studentRoutes;