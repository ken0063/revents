import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer';
import thunk from 'redux-thunk';
import { verifyAuth } from '../../auth/AuthAction';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  store.dispatch(verifyAuth());
  return store;
};

export default configureStore;
