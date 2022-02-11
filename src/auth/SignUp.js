import { Formik, Form } from 'formik';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Divider, Label } from 'semantic-ui-react';
import { signUpInFirebase } from '../app/firestore/firebaseService';
import { Modals, TextInput } from '../component';
import { closeModal, openModal } from '../component/modal/ModalReducer';
import { signUpFormSchema } from './authValidation';
import SocialLogin from './SocialLogin';

const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <Modals size="tiny" header="Sign Up to Revents">
      <Fragment>
        <Formik
          initialValues={{ displayName: '', email: '', password: '' }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await signUpInFirebase(values);
              setSubmitting(false);
              dispatch(closeModal());
            } catch (error) {
              setErrors({ auth: error.message });
              setSubmitting(false);
            }
          }}
          validationSchema={signUpFormSchema}
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
                name="displayName"
                placeholder="Enter Your Display Name"
              />
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
                content="Sign Up"
                fluid
                size="large"
                color="teal"
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
              />
              <div className="auth-subtext">
                Do you have an account?
                <Link
                  style={{ marginLeft: '5px' }}
                  as={Button}
                  onClick={() => dispatch(openModal({ modalType: 'Login' }))}
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

export default SignUp;
