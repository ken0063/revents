import { CREATE_EVENTS, DELETE_EVENTS, UPDATE_EVENTS } from './EventsConsts';

export const createEvents = (events) => {
  return {
    type: CREATE_EVENTS,
    payload: events,
  };
};

export const deleteEvents = (events) => {
  return {
    type: DELETE_EVENTS,
    payload: events,
  };
};

export const updateEvents = (eventId) => {
  return {
    type: UPDATE_EVENTS,
    payload: eventId,
  };
};
