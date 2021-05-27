import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../..';

const EventDashboard = () => {
  const events = useSelector((state) => state.events);

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event Filters</h2>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default EventDashboard;
