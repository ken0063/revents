import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { signOutUser } from '../../auth/AuthAction';

const SignedInMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(signOutUser());
    history.push('/');
  };

  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src={currentUser.photoURL} />
      <Dropdown pointing="top left" text={currentUser.email}>
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
            onClick={handleSignOut}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
