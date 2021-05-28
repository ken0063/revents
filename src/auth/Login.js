import { Formik, Form } from 'formik';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Modals, TextInput } from '../component';
import { closeModal } from '../component/modal/ModalReducer';
import { signInUser } from './AuthAction';
import { loginFormSchema } from './LoginValidation';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <Modals size="tiny" header="Sign In to Revents">
      <Fragment>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(signInUser(values));
            setSubmitting(false);
            dispatch(closeModal());
          }}
          validationSchema={loginFormSchema}
        >
          {({ isSubmitting, dirty, isValid }) => (
            <Form className="ui form">
              <TextInput
                type="email"
                name="email"
                placeholder="Enter Email Address"
              />
              <TextInput
                type="password"
                name="password"
                placeholder="Enter Password"
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
              <span>
                Do not have an account?
                <Link content="Sign Up" color="green" />
              </span>
            </Form>
          )}
        </Formik>
      </Fragment>
    </Modals>
  );
};

export default Login;
