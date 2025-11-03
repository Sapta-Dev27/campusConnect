import express from 'express';
import createBranch from '../controllers/branch/branch.create.controller.js';
import auth from '../middlewares/auth.middleware.js';
import getAllBranches from '../controllers/branch/branch.getAll.controller.js';
import getBranchByID from '../controllers/branch/branch.getByID.controller.js';
import updateBranch from '../controllers/branch/branch.update.controller.js';
import deleteBranch from '../controllers/branch/branch.delete.controller.js';

const router = express.Router();

router.post('/create' , auth , createBranch);
router.get('/fetch' , auth , getAllBranches);
router.get('/fetch/:id' , auth , getBranchByID);
router.put('/update/:id' , auth, updateBranch);
router.delete('/delete/:id' , auth , deleteBranch);

export default router;