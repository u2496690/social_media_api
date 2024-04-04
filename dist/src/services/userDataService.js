import { faker } from '@faker-js/faker';
import { storeUserData } from '../helpers/helpers.js';
export const generateUserOneData = () => {
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
export const generateUserTwoData = () => {
    const generatedUserData = {
        username: "userone",
        followercount: faker.number.int({ min: 100000, max: 1000000 }),
        followingcount: faker.number.int({ min: 0, max: 300 }),
        postsnum: faker.number.int({ min: 0, max: 50 }),
        pfp: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sad-face.png",
    };
    storeUserData(generatedUserData).catch(console.error);
    return generatedUserData;
};
