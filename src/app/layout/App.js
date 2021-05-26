/* eslint-disable no-unreachable */
import React, { Fragment, useState } from 'react';
import {
  EventDashboard,
  EventDetailsPage,
  EventForm,
  NavBar,
} from '../../features/index';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route, useHistory } from 'react-router-dom';
import { HomePage } from '../../home';

const App = () => {
  return (
    <Fragment>
      <Route path="/" component={HomePage} exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} exact />
              <Route path="/events/:id" component={EventDetailsPage} />
              <Route
                path={['/createEvents', '/manage/:id']}
                component={EventForm}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
