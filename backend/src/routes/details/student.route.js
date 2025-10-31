import express from 'express';
import registerStudent from '../../controllers/details/student/student.register.controller.js';

const router = express.Router();

router.post('/register', registerStudent);

export default router;