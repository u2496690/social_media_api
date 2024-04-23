import { faker } from '@faker-js/faker';
import { storeUserData } from '../helpers/helpers.js';

// generate data for "userone"
export const generateUserOneData = (): UserData => {
  const generatedUserData = {
    username: "userone",
    followercount: faker.number.int({ min: 100000, max: 1000000 }),
    followingcount: faker.number.int({ min: 0, max: 300 }),
    postsnum: faker.number.int({ min: 0, max: 50 }),
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
  };

  storeUserData(generatedUserData).catch(console.error);

  return generatedUserData;
};

//  generate data for "usertwo"
export const generateUserTwoData = (): UserData => {
  const generatedUserData = {
    username: "userone",
    followercount: faker.number.int({ min: 100000, max: 1000000 }),
    followingcount: faker.number.int({ min: 0, max: 300 }),
    postsnum: faker.number.int({ min: 0, max: 50 }),
    pfp: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sad-face.png",
  };

  // store generated user data in the blockchain and log errors
  storeUserData(generatedUserData).catch(console.error);
  // return generated data
  return generatedUserData;
};
