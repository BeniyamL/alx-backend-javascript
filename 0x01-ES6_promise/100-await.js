import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (err) {
    photo = null;
    user = null;
  }
  return ({ photo, user });
}
export default asyncUploadUser;
