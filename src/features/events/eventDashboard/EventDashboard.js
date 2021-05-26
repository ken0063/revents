import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { EventForm, EventList } from '../..';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvents,
  selectedEvents,
}) => {
  const [events, setEvents] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleEventUpdate = (updatedEvent) => {
    setEvents(
      events.map((eve) => (eve.id === updatedEvent.id ? updatedEvent : eve)),
    );
    selectEvents(null);
    setFormOpen(false);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((eve) => eve.id !== eventId));
  };

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            selectEvents={selectEvents}
            deleteEvents={handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {formOpen ? (
            <EventForm
              setFormOpen={setFormOpen}
              formOpen={formOpen}
              setEvents={setEvents}
              createEvent={handleCreateEvent}
              selectedEvents={selectedEvents}
              updateEvent={handleEventUpdate}
              key={selectedEvents ? selectedEvents.id : null}
            />
          ) : (
            ''
          )}
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default EventDashboard;
