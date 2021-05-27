import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import {
  EventDetailChat,
  EventDetailsHeader,
  EventDetailsInfo,
  EventDetailsSideBar,
} from '../../index';

const EventDetailsPage = ({ match }) => {
  const event = useSelector((state) =>
    state.events.events.find((eve) => eve.id === match.params.id),
  );

  return (
    <Grid>
      <Grid.Column width={4}>
        <EventDetailsSideBar attendees={event.attendees} />
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
