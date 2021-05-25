import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import { EventListAttendee } from '../..';

const EventListItem = (items) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              src={items.event && items.event.hostPhotoURL}
              size="tiny"
              circular
            />
            <Item.Content>
              <Item.Header content={items.event && items.event.title} />
              <Item.Description>
                Hosted by {items.event && items.event.hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {items.event && items.event.date}
          <Icon name="marker" className="icon-space" />
          {items.event && items.event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttendee attendees={items.event.attendees} />
        </List>
      </Segment>
      <Segment clearing>
        <div className="description-text">
          {items.event && items.event.description}
        </div>
        <Button color="teal" floated="right" content="View" />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
