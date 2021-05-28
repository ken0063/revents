import React from 'react';
import { Segment, Item } from 'semantic-ui-react';
import user from '../../../utils/assets/user.png';

const EventDetailsSideBar = ({ attendees }) => {
  return (
    <Segment.Group>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{' '}
        {attendees && attendees.length > 1 ? 'People' : 'Person'} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendees &&
            attendees.map((attendee) => (
              <Item style={{ position: 'relative' }} key={attendee.id}>
                <Item.Image size="tiny" src={attendee.photoURL || user} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <span>{attendee.displayName}</span>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsSideBar;
