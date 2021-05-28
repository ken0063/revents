import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Confirm,
  Icon,
  Item,
  Label,
  List,
  Segment,
} from 'semantic-ui-react';
import { EventListAttendee } from '../..';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { deleteEventInFirestore } from '../../../app/firestore/firestoreService';

const EventListItem = ({ eventItems }) => {
  const dispatch = useDispatch();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDeleteToggle = async (eventId) => {
    setConfirmOpen(false);
    setDeleteLoading(true);
    try {
      await dispatch(deleteEventInFirestore(eventId));
      setDeleteLoading(false);
    } catch (error) {
      setDeleteLoading(true);
    }
  };
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
              {eventItems.isCancelled ? (
                <Label
                  content="Event Cancelled"
                  color="red"
                  ribbon="right"
                  style={{ top: '-40px' }}
                />
              ) : (
                <Label
                  content="Event Active"
                  color="green"
                  ribbon="right"
                  style={{ top: '-40px' }}
                />
              )}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(eventItems && eventItems.date, 'MMMM d, yyyyy h:mm a')}
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
          onClick={() => setConfirmOpen(true)}
          type="button"
          loading={deleteLoading}
        />
      </Segment>
      <Confirm
        content="Are you sure you want to delete this event?"
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => handleDeleteToggle(eventItems.id)}
      />
    </Segment.Group>
  );
};

export default EventListItem;
