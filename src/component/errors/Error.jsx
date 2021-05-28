import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

const Error = () => {
  const { error } = useSelector((state) => state.async);
  return (
    <Segment placeholder style={{ height: '80vh', margin: '50px' }}>
      <Header textAlign="center" content={error?.message || 'PAGE NOT FOUND'} />
      <Button
        as={Link}
        to="/events"
        primary
        style={{ marginTop: '20px' }}
        content="Return to events page"
        icon="arrow left"
      />
    </Segment>
  );
};

export default Error;
