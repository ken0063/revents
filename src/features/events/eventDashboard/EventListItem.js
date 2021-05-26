import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import { EventListAttendee } from '../..';

const EventListItem = ({ eventItems, selectEvents, deleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              src={eventItems && eventItems.hostPhotoURL}
              size="tiny"
              circular
            />
            <Item.Content>
              <Item.Header content={eventItems && eventItems.title} />
              <Item.Description>
                Hosted by {eventItems && eventItems.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {eventItems && eventItems.date}
          <Icon name="marker" className="icon-space" />
          {eventItems && eventItems.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {eventItems &&
            eventItems.attendees.map((attendee) => (
              <EventListAttendee attendee={attendee} key={attendee.id} />
            ))}
        </List>
      </Segment>
      <Segment clearing>
        <div className="description-text">
          {eventItems && eventItems.description}
        </div>
        <Button
          color="teal"
          floated="right"
          content="View"
          as={Link}
          to={`/events/${eventItems.id}`}
        />
        <Button
          color="red"
          floated="left"
          content="Delete"
          onClick={() => deleteEvent(eventItems.id)}
        />
        {console.log(eventItems.id)}
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
