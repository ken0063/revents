import { combineReducers } from 'redux';
import EventsReducer from '../../features/events/EventsReducer';
import testReducer from '../../features/sandBox/testReducer';

const rootReducer = combineReducers({
  test: testReducer,
  events: EventsReducer,
});

export default rootReducer;
