import express from 'express';
import createExam from '../controllers/exams/exam.create.controller.js';
import getAllExams from '../controllers/exams/exam.getAll.controller.js';
import updateExams from '../controllers/exams/exam.update.controller.js';
import deleteExam from '../controllers/exams/exam.delete.controller.js';
import auth from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post('/create',auth, createExam);
router.get('/fetch', auth, getAllExams);
router.put('/update/:id', auth ,updateExams);
router.delete('/delete/:id', auth, deleteExam);

export default router;