import { faker } from '@faker-js/faker';
import { storeUserData } from '../helpers/helpers.js';

export const generateUserOneData = (): UserData => {
  const generatedUserData = {
    username: "userone",
    follower_count: faker.number.int({ min: 100000, max: 1000000 }),
    following_count: faker.number.int({ min: 0, max: 300 }),
    posts_num: faker.number.int({ min: 0, max: 50 }),
    pfp: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png",
  };

  storeUserData(generatedUserData).catch(console.error);

  return generatedUserData;
};

export const generateUserTwoData = (): UserData => {
  const generatedUserData = {
    username: "userone",
    follower_count: faker.number.int({ min: 100000, max: 1000000 }),
    following_count: faker.number.int({ min: 0, max: 300 }),
    posts_num: faker.number.int({ min: 0, max: 50 }),
    pfp: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sad-face.png",
  };

  storeUserData(generatedUserData).catch(console.error);

  return generatedUserData;
};
