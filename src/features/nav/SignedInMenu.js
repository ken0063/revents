import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { signOutFirebase } from '../../app/firestore/firebaseService';

const SignedInMenu = () => {
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await signOutFirebase();
      history.push('/');
    } catch (error) {
      toast.error(error.message);
    }
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
            as={Link}
            to="/account"
            text="My Account"
            icon="settings"
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
