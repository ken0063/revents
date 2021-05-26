import React from 'react';
import { Segment, Item } from 'semantic-ui-react';
import user from '../../../utils/assets/user.png';

const EventDetailsSideBar = () => {
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
        2 People Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Item.Image size="tiny" src={user} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <span>Tom</span>
              </Item.Header>
            </Item.Content>
          </Item>
          <Item style={{ position: 'relative' }}>
            <Item.Image size="tiny" src={user} />
            <Item.Content verticalAlign="middle">
              <Item.Header as="h3">
                <span>Bob</span>
              </Item.Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailsSideBar;
