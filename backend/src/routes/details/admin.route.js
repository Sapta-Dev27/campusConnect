import express from 'express';
import registerAdmin from '../../controllers/details/admin/admin.register.controllers.js';
import registerFaculty from '../../controllers/details/faculty/faculty.register.controller.js';

const router = express.Router();

router.post('/register' , registerAdmin);


export default router;