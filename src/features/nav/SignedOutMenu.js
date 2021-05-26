import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const SignedOutMenu = ({ setAuth }) => {
  return (
    <Menu.Item position="right">
      <Button
        basic
        content="Login"
        inverted
        onClick={() => setAuth(true)}
        // as={NavLink} to="/login"
      />
      <Button
        basic
        content="Register"
        inverted
        style={{ marginLeft: '10px' }}
        // as={NavLink}
        // to="/signup"
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
