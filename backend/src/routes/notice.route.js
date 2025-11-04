import express from 'express';
import auth from '../middlewares/auth.middleware.js';
import createNotice from '../controllers/notice/notice.create.controller.js';
import fetchAllNotice from '../controllers/notice/notice.fetchAll.controller.js';
import updateNotice from '../controllers/notice/notice.update.controller.js';
import deleteNotice from '../controllers/notice/notice.delete.controller.js'; 
import fetchAlFacultyNotice from '../controllers/notice/notice.fetch.faculty.controller.js';
import fetchAllStudentNotice from '../controllers/notice/notice.fetch.student.controller.js';

const router = express.Router();


router.post('/create', auth, createNotice);
router.get('/fetch', auth ,fetchAllNotice);
router.put('/update/:id', auth, updateNotice);
router.delete('/delete/:id', auth, deleteNotice);
router.get('/fetch/faculty', auth, fetchAlFacultyNotice);
router.get('/fetch/student', auth, fetchAllStudentNotice);

export default router;