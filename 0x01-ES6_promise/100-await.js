import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    // Call both async functions concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return the responses as an object
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async functions fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
