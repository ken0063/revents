import React, { Fragment } from 'react';
import { Image, List } from 'semantic-ui-react';

const EventListAttendee = ({ attendee }) => {
  return (
    <Fragment>
      <List.Item>
        <Image
          size="mini"
          circular
          src={attendee.photoURL}
          key={attendee.id}
          style={{ marginRight: '10px' }}
        />
      </List.Item>
    </Fragment>
  );
};

export default EventListAttendee;
