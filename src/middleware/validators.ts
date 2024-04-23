import { param } from 'express-validator';

const usernames: string[] = ['userone', 'usertwo']

// checks in username is a string and is in the valid list of usernames
// returns 'Invalid username' if invalid
export const validateUsername = param('username')
  .isString()
  .isIn(usernames)
  .withMessage('Invalid username');
