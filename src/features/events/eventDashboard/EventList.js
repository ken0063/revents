import React, { Fragment } from 'react';
import { EventListItem } from '../..';

const EventList = ({ events, selectEvents, deleteEvents }) => {
  return (
    <Fragment>
      {events &&
        events.map((items) => (
          <EventListItem
            eventItems={items}
            key={items.id}
            selectEvents={selectEvents}
            deleteEvent={deleteEvents}
          />
        ))}
    </Fragment>
  );
};

export default EventList;
