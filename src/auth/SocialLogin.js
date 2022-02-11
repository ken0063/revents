import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { socialLoginProvider } from '../app/firestore/firebaseService';
import { closeModal } from '../component/modal/ModalReducer';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const handleSocialLogin = (provider) => {
    dispatch(closeModal());
    socialLoginProvider(provider);
  };
  return (
    <Fragment>
      <Button
        icon="facebook"
        content="Login with Facebook"
        fluid
        color="facebook"
        style={{ marginBottom: '10px' }}
        onClick={() => handleSocialLogin('facebook')}
      />
      <Button
        icon="google"
        content="Login with Google"
        fluid
        color="google plus"
        style={{ marginBottom: '30px' }}
        onClick={() => handleSocialLogin('google')}
      />
    </Fragment>
  );
};

export default SocialLogin;
