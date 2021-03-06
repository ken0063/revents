import { Formik, Form } from 'formik';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Divider, Label } from 'semantic-ui-react';
import { signInWithEmail } from '../app/firestore/firebaseService';
import { Modals, TextInput } from '../component';
import { closeModal, openModal } from '../component/modal/ModalReducer';
import { loginFormSchema } from './authValidation';
import SocialLogin from './SocialLogin';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Modals size="tiny" header="Login to Revents">
      <Fragment>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await signInWithEmail(values);
              setSubmitting(false);
              dispatch(closeModal());
            } catch (error) {
              setErrors({ auth: 'Invalid Email/Password' });
              setSubmitting(false);
            }
          }}
          validationSchema={loginFormSchema}
        >
          {({ isSubmitting, dirty, isValid, errors }) => (
            <Form className="ui form">
              {errors.auth && (
                <Label content={errors.auth} color="red" className="error" />
              )}
              <SocialLogin />
              <Divider horizontal style={{ marginBottom: '30px' }}>
                OR
              </Divider>
              <TextInput
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
              <Button
                type="submit"
                content="Login"
                fluid
                size="large"
                color="teal"
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
              />
              <div className="auth-subtext">
                Do you have an account?{' '}
                <Link
                  style={{ marginLeft: '5px' }}
                  as={Button}
                  onClick={() => dispatch(openModal({ modalType: 'SignUp' }))}
                >
                  Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Modals>
  );
};

export default Login;
