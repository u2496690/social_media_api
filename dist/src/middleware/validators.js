import { param } from 'express-validator';
const usernames = ['userone', 'usertwo'];
export const validateUsername = param('username')
    .isString()
    .isIn(usernames)
    .withMessage('Invalid username');
