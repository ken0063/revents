const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const initialState = { data: 50 };

export const increase = (amount) => {
  return {
    type: INCREASE,
    payload: amount,
  };
};

export const decrease = (amount) => {
  return {
    type: DECREASE,
    payload: amount,
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
