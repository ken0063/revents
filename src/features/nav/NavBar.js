import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { SignedInMenu, SignedOutMenu } from '..';
import logo from '../../utils/assets/logo.png';

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const history = useHistory();

  const handleSignedOut = () => {
    setAuth(false);
    history.push('/');
  };
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to="/">
          <img src={logo} alt="logo" style={{ marginRight: '10px' }} />
          Re-vents
        </Menu.Item>
        <Menu.Item
          name="Events"
          as={NavLink}
          to="/events"
          style={{ marginLeft: '50px' }}
        />
        <Menu.Item name="Sandbox" as={NavLink} to="/sand-box" />
        {auth && (
          <Menu.Item as={NavLink} to="/create-events">
            <Button positive content="Create Event" inverted />
          </Menu.Item>
        )}

        {auth ? (
          <SignedInMenu handleSignedOut={handleSignedOut} />
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
