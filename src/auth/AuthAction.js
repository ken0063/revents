import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../app/async/AsyncReducer';
import { delay } from '../utils/util';
import { SIGN_IN_USER, SIGN_OUT_USER } from './AuthConst';
import { toast } from 'react-toastify';

export const signInUser = (payload) => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(2000);
      dispatch({ type: SIGN_IN_USER, payload });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
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
