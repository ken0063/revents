import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/AsyncReducer';
import { delay } from '../../utils/util';
import { toast } from 'react-toastify';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const initialState = { data: 50 };

export const increase = (amount) => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(2000);
      dispatch({ type: INCREASE, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
    }
  };
};

export const decrease = (amount) => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      await delay(2000);
      dispatch({ type: DECREASE, payload: amount });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.error(error);
    }
  };
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        data: state.data + action.payload,
      };
    case DECREASE:
      return {
        ...state,
        data: state.data - action.payload,
      };

    default:
      return state;
  }
};

export default testReducer;
