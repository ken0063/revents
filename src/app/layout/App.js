import React, { Fragment } from 'react';
import {
  EventDashboard,
  EventDetailsPage,
  EventForm,
  NavBar,
  SandBox,
} from '../../features/index';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';
import { HomePage } from '../../home';

const App = () => {
  const { key } = useLocation();
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
              <Route path="/sand-box" component={SandBox} exact />
              <Route path="/events/:id" component={EventDetailsPage} />
              <Route
                path={['/create-events', '/manage/:id']}
                component={EventForm}
                key={key}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
