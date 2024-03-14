import { param } from 'express-validator';

const usernames: string[] = ['userone', 'usertwo'];

export const validateCityName = param('city')
  .isString()
  .isIn(['london', 'dublin'])
  .withMessage('City name must be either london or dublin');

export const validateUsername = param('username')
  .isString()
  .isIn(usernames)
  .withMessage('Invalid username');
