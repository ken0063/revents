import {
  CREATE_EVENTS,
  DELETE_EVENTS,
  FETCH_EVENTS,
  UPDATE_EVENTS,
} from './EventsConsts';

const initialState = {
  events: [],
};

const EventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_EVENTS:
      return {
        ...state,
        events: [...state.events, payload],
      };
    case DELETE_EVENTS:
      return {
        ...state,
        events: [...state.events.filter((eve) => eve.id !== payload)],
      };
    case UPDATE_EVENTS:
      return {
        ...state,
        events: [
          ...state.events.filter((eve) => eve.id !== payload.id),
          payload,
        ],
      };
    case FETCH_EVENTS:
      return {
        ...state,
        events: payload,
      };
    default:
      return state;
  }
};

export default EventsReducer;
