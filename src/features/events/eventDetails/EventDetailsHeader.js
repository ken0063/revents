import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react';
import { updateEvents } from '../EventsActions';
import { format } from 'date-fns';

const eventImageStyle = {
  filter: 'brightness(50%)',
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
};

const EventDetailsHeader = ({ event }) => {
  const dispatch = useDispatch();
  return (
    <Segment.Group style={{ padding: '0' }}>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image
          src={`/utils/assets/categoryImages/${event && event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />
        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event && event.title}
                  style={{ color: 'white' }}
                />
                <p> {format(event && event.date, 'MMMM d, yyyyy h:mm a')} </p>
                <p>
                  Hosted by <strong>{event && event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button color="red" style={{ marginRight: '90px' }}>
          Cancel My Place
        </Button>
        <Button color="teal">JOIN THIS EVENT</Button>

        <Button
          color="orange"
          floated="right"
          as={Link}
          to={`/manage/${event && event.id}`}
          onClick={() => dispatch(updateEvents(event))}
        >
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsHeader;
