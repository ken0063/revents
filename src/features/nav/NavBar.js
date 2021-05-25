import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import logo from '../../utils/assets/logo.png';

const NavBar = ({ formOpen, setFormOpen }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header position="left">
          <img src={logo} alt="logo" style={{ marginRight: '10px' }} />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button
            positive
            content="Create Event"
            inverted
            onClick={() => setFormOpen(!formOpen)}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic content="Login" inverted />
          <Button
            basic
            content="Register"
            inverted
            style={{ marginLeft: '10px' }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
