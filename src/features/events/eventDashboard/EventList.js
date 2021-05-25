import React, { Fragment } from 'react';
import { EventListItem } from '../..';

const EventList = ({ events }) => {
  return (
    <Fragment>
      {events &&
        events.map((items) => <EventListItem event={items} key={items.id} />)}
    </Fragment>
  );
};

export default EventList;
