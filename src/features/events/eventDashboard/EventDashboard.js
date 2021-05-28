import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { EventFilter, EventList, EventPlaceholder } from '../..';
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToEvents } from '../EventsActions';

const EventDashboard = () => {
  const events = useSelector((state) => state.events);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch],
  });

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          {loading && (
            <Fragment>
              <EventPlaceholder />
              <EventPlaceholder />
              <EventPlaceholder />
            </Fragment>
          )}
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventFilter />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default EventDashboard;
