import express from 'express';
import registerStudent from '../../controllers/details/student/student.register.controller.js';
import studentLoginController from '../../controllers/details/student/student.login.controller.js';

const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', studentLoginController);

export default router;