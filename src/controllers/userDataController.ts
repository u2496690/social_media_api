import { Request, Response } from 'express';
import {
  generateUserOneData,
  generateUserTwoData,
} from '../services/userDataService.js';
import { validationResult } from 'express-validator';

/**
 * Gets the user data for a user
 * @param req the request object
 * @param res the response object
 */
export const getUserData = async (req: Request, res: Response) => {
  // Check if there are any validation errors
  const errors = validationResult(req);
  // We will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // We will use a try catch block to catch any errors
  try {
    // Get the username param from the request
    const { username } = req.params;
    console.log(username);

    // We will create a variable with a type of UserData
    let finalUserData: UserData;
    finalUserData = {
      username: "new user",
      followercount: 1,
      followingcount: 1,
      postsnum: 1,
      pfp: "picture url"
    };

    // We will use an if statement to check which user was passed in
    if (username === 'userone') {
      finalUserData = generateUserOneData();
    } else if (username === 'usertwo') {
      finalUserData = generateUserTwoData();
    } else {
      // If the username is not userone or usertwo, we will throw an error
      res.status(404).send('User not found');
    }
    // We will return the user data as JSON
    console.log(finalUserData);
    res.status(200).json(finalUserData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send('Error in fetching user data');
  }
};
