import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/AsyncReducer';
import {
  CREATE_EVENTS,
  DELETE_EVENTS,
  UPDATE_EVENTS,
  FETCH_EVENTS,
} from './EventsConsts';
import { toast } from 'react-toastify';
import { fetchSampleData } from '../../app/api/mockAPI';

export const loadEvents = () => {
  return async function (dispatch) {
    dispatch(asyncActionStart());
    try {
      const events = await fetchSampleData();
      dispatch({ type: FETCH_EVENTS, payload: events });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError(error));
      toast.erro(error);
    }
  };
};

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
  return { type: UPDATE_EVENTS, payload: eventId };
};
