import { db } from 'firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const postLoginRequestApiCall = async ({ email, password }) => {
  const auth = getAuth(db);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(
          'userCrenential-=-=--=--=-=---->>>',
          userCredential.user.accessToken
        );
        // Signed in
        const user = userCredential.user;
        resolve(user);
        // ...
        //   onSuccess && onSuccess(true);
      })
      .catch(error => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log('error=-=--==----=--', errorCode, errorMessage);
        // onSuccess && onSuccess(false);
        resolve(false);
      });
  });
};
