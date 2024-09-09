import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type UserCredential,
} from 'firebase/auth';
import { auth } from './firebase';

export const login = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then((result) => {
    console.log('login success');
    return result;
  });
};

export const logout = (): Promise<void> => {
  return signOut(auth).then(() => {
    console.log('logout success');
  });
};
