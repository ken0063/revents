import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import user from '../../utils/assets/user.png';

const SignedInMenu = ({ handleSignedOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={user} />
      <Dropdown pointing="top left" text="ken">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/create-events"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            // as={Link}
            // to="/create-events"
            text="My Profile"
            icon="user"
          />
          <Dropdown.Item
            // as={Link}
            // to="/create-events"
            text="Sign Out"
            icon="power"
            onClick={(e) => handleSignedOut(e)}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
