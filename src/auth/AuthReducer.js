import { SIGN_IN_USER, SIGN_OUT_USER } from './AuthConst';
import { getRandomPhotoURL } from '../utils/util';

const initialState = {
  authenticated: true,
  currentUser: {
    email: 'ken.test.com',
    photoURL: getRandomPhotoURL(),
  },
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: getRandomPhotoURL(),
        },
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
