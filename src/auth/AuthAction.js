import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../app/async/AsyncReducer';
import { delay } from '../utils/util';
import { SIGN_IN_USER, SIGN_OUT_USER } from './AuthConst';
import { toast } from 'react-toastify';
import firebase from '../config/firebase';

export const signInUser = (user) => {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
};

export const signOutUser = () => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(2000);
      dispatch({
        type: SIGN_OUT_USER,
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
};

export const verifyAuth = () => {
  return async function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  };
};
