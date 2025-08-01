import express from 'express';
import userController from '../controller/user-controller.js';

const router = new express.Router();    
router.post('/api/users', userController.register);

export default router;