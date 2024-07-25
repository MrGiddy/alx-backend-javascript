import { uploadPhoto, createUser } from './utils';

let o = [];

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    o = { photo, user };
  } catch (error) {
    o = { photo: null, user: null };
  }

  return o;
}
