import express from 'express';
import registerAdmin from '../../controllers/details/admin/admin.register.controllers.js';
import adminLoginController from '../../controllers/details/admin/admin.login.controller.js';

const router = express.Router();

router.post('/register' , registerAdmin);
router.post('/login' , adminLoginController);


export default router;