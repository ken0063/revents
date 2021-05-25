/* eslint-disable no-unreachable */
import React, { Fragment, useState } from 'react';
import { EventDashboard, NavBar } from '../../features/index';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <Fragment>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </Fragment>
  );
};

export default App;
