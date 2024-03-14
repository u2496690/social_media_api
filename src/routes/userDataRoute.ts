import express from 'express';
import { getUserData } from '../controllers/userDataController.js';
import { validateUsername } from '../middleware/validators.js';

const router = express.Router();

router.get('/:username', validateUsername, getUserData);

export default router;
