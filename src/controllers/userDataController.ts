import { Request, Response } from 'express';
import {
  generateUserOneData,
  generateUserTwoData
} from '../services/userDataService.js';
import { validationResult } from 'express-validator';

/**
 * Gets the weather data for a city
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
    // Get the city param from the request
    const { username } = req.params;
    console.log("Fetching data from "+username);

    // We will create a variable with a type of WeatherData
    let userData: SocialMediaData;
    userData = {
      username: "noone",
      pfp: "www.google.com",
      followercount: 1,
      followingcount: 1,
      postsnum: 1,
    };

    // We will use an if statement to check which city was passed in
    if (username === 'userone') {
      userData = generateUserOneData();
    } else if (username === 'usertwo') {
      userData = generateUserTwoData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send('User not found');
    }
    // We will return the weather data as JSON
    console.log(userData);
    res.status(200).json(userData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send('Error in fetching weather data');
  }
};