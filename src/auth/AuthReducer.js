import { SIGN_IN_USER, SIGN_OUT_USER } from './AuthConst';
import user from '../utils/assets/user.png';

const initialState = {
  authenticated: true,
  currentUser: {
    email: 'ken.test.com',
    // photoURL: { user },
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
          photoURL: { user },
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
