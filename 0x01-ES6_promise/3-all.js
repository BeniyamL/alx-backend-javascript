import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      const b = data[0].body;
      const fn = data[1].firstName;
      const ln = data[1].lastName;

      console.log(`${b} ${fn} ${ln}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
