import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { listenToEventFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreDoc } from '../../../app/hooks/useFirestoreDoc';
import { Loaders } from '../../../component';
import {
  EventDetailChat,
  EventDetailsHeader,
  EventDetailsInfo,
  EventDetailsSideBar,
} from '../../index';
import { listenToEvents } from '../EventsActions';
import { Redirect } from 'react-router-dom';

const EventDetailsPage = ({ match }) => {
  const event = useSelector((state) =>
    state.events.events.find((eve) => eve.id === match.params.id),
  );

  const { loading, error } = useSelector((state) => state.async);

  const dispatch = useDispatch();

  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps: [match.params.id, dispatch],
  });

  if (loading || (!event && !error))
    return <Loaders content="Loading events ..." />;

  if (error) return <Redirect to="/error" />;

  return (
    <Grid>
      <Grid.Column width={4}>
        <EventDetailsSideBar attendees={event?.attendees} />
      </Grid.Column>
      <Grid.Column width={12}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailsPage;
