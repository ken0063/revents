import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import { setUserProfileData } from './firestoreService';

export const signInWithEmail = (creds) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password);
};

export const signOutFirebase = () => {
  return firebase.auth().signOut();
};

export const signUpInFirebase = async (creds) => {
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password);
    await result.user.updateProfile({ displayName: creds.displayName });
    return await setUserProfileData(result.user);
  } catch (error) {
    throw error;
  }
};

export const socialLoginProvider = async (selectedMethod) => {
  let provider;
  if (selectedMethod === 'facebook') {
    provider = new firebase.auth.FacebookAuthProvider();
  }
  if (selectedMethod === 'google') {
    provider = new firebase.auth.GoogleAuthProvider();
  }

  try {
    const result = await firebase.auth().signInWithPopup(provider);
    console.log(result);
    if (result.additionalUserInfo.isNewUser) {
      await setUserProfileData(result.user);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
