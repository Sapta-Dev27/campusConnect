import express from 'express';
import registerFaculty from '../../controllers/details/faculty/faculty.register.controller.js';
import facultyLoginController from '../../controllers/details/faculty/faculty.login.controller.js';

const router = express.Router();

router.post('/register' , registerFaculty);
router.post('/login' , facultyLoginController);

export default router;