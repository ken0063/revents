import { combineReducers } from 'redux';
import AuthReducer from '../../auth/AuthReducer';
import modalReducer from '../../component/modal/ModalReducer';
import EventsReducer from '../../features/events/EventsReducer';
import testReducer from '../../features/sandBox/testReducer';
import AsyncReducer from '../async/AsyncReducer';

const rootReducer = combineReducers({
  test: testReducer,
  events: EventsReducer,
  modals: modalReducer,
  auth: AuthReducer,
  async: AsyncReducer,
});

export default rootReducer;
