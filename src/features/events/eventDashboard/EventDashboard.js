import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventList } from '../..';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleEventUpdate = (updatedEvent) => {
  //   setEvents(
  //     events.map((eve) => (eve.id === updatedEvent.id ? updatedEvent : eve)),
  //   );
  //   selectEvents(null);
  //   setFormOpen(false);
  // };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((eve) => eve.id !== eventId));
  };

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvents={handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Event Filters</h2>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default EventDashboard;
