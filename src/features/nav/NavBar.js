import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { SignedInMenu, SignedOutMenu } from '..';
import logo from '../../utils/assets/logo.png';

const NavBar = () => {
  const { authenticated } = useSelector((state) => state.auth);

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
        {authenticated && (
          <Menu.Item as={NavLink} to="/create-events">
            <Button positive content="Create Event" inverted />
          </Menu.Item>
        )}

        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
