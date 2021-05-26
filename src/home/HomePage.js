import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import logo from '../utils/assets/logo.png';

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="homepage">
      <Container>
        <Header as="h1" inverted>
          <Image src={logo} size="massive" style={{ marginBottom: '12px' }} />
          Re-vents
        </Header>
        <Button size="huge" inverted onClick={() => history.push('/events')}>
          Get Started
          <Icon name="arrow right" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
