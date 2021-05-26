import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react';
import drink from '../../../utils/assets/categoryImages/drinks.jpg';

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

const EventDetailsHeader = () => {
  return (
    <Segment.Group style={{ padding: '0' }}>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={drink} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content="Event Title"
                  style={{ color: 'white' }}
                />
                <p>Event Date</p>
                <p>
                  Hosted by <strong>Bob</strong>
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

        <Button color="orange" floated="right" as={Link} to={`/manage/`}>
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsHeader;
