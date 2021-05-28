import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { EventFilter, EventList, EventPlaceholder } from '../..';

const EventDashboard = () => {
  const events = useSelector((state) => state.events);
  const { loading } = useSelector((state) => state.async);

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
