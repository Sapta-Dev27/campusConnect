import express from 'express';
import registerFaculty from '../../controllers/details/faculty/faculty.register.controller.js';

const router = express.Router();

router.post('/register' , registerFaculty);


export default router;