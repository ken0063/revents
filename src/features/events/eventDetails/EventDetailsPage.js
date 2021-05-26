import React from 'react';
import { Grid } from 'semantic-ui-react';
import {
  EventDetailChat,
  EventDetailsHeader,
  EventDetailsInfo,
  EventDetailsSideBar,
} from '../../index';

const EventDetailsPage = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <EventDetailsSideBar />
      </Grid.Column>
      <Grid.Column width={12}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EventDetailChat />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailsPage;
