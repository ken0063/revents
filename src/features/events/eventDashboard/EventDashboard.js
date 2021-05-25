import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventForm, EventList } from '../..';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({ formOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen ? (
            <EventForm setFormOpen={setFormOpen} formOpen={formOpen} />
          ) : (
            ''
          )}
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default EventDashboard;
