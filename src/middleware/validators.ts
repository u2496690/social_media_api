import { param } from 'express-validator';

const usernames: string[] = ['userone', 'usertwo']

export const validateUsername = param('username')
  .isString()
  .isIn(usernames)
  .withMessage('Invalid username');
