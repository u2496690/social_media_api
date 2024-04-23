import express from 'express';
import { getUserData } from '../controllers/userDataController.js';
import { validateUsername } from '../middleware/validators.js';

const router = express.Router();

/**
 * get route /api/userdata/[username] and use 'username' as a parameter
 * in validateUser and getUserData functions
*/
router.get('/:username', validateUsername, getUserData);

export default router;
