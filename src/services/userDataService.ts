import { faker } from '@faker-js/faker';
import { storeUserData } from '../helpers/helpers.js';

export const generateUserOneData = (): SocialMediaData => {
  const generatedUserData = {
    username: "userone",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
    followercount: faker.number.int({ min: 0, max: 1000000 }),
    followingcount: faker.number.int({ min: 0, max: 1000 }),
    postsnum: faker.number.int({ min: 0, max: 100 })
  };

  storeUserData(generatedUserData).catch(console.error);

  return generatedUserData;
};

export const generateUserTwoData = (): SocialMediaData => {
  const generatedUserData = {
    username: "usertwo",
    pfp: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sad-face.png",
    followercount: faker.number.int({ min: 0, max: 1000 }),
    followingcount: faker.number.int({ min: 0, max: 3000 }),
    postsnum: faker.number.int({ min: 0, max: 100 })
  };

  storeUserData(generatedUserData).catch(console.error);

  return generatedUserData;
};