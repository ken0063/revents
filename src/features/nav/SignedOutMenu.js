import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from 'semantic-ui-react';
import { openModal } from '../../component/modal/ModalReducer';
const SignedOutMenu = () => {
  const dispatch = useDispatch();

  return (
    <Menu.Item position="right">
      <Button
        basic
        content="Login"
        inverted
        onClick={() => dispatch(openModal({ modalType: 'Login' }))}
      />

      <Button
        basic
        content="Register"
        inverted
        style={{ marginLeft: '10px' }}
        onClick={() => dispatch(openModal({ modalType: 'SignUp' }))}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
