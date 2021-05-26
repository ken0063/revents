/* eslint-disable no-unreachable */
import React, { Fragment, useState } from 'react';
import { EventDashboard, NavBar } from '../../features/index';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState(null);

  const handleSelectedEvents = (event) => {
    setSelectedEvents(event);
    setFormOpen(true);
  };
  const handleCreateFormOpen = () => {
    setSelectedEvents(null);
    setFormOpen(!formOpen);
  };

  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvents={handleSelectedEvents}
          selectedEvents={selectedEvents}
        />
      </Container>
    </Fragment>
  );
};

export default App;
