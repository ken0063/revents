import { Formik, Form } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Label, Segment } from 'semantic-ui-react';
import { TextInput } from '../component';
import { passwordSchema } from './authValidation';

const AccountPage = () => {
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      <div>
        <p>For email and password sign in password recovery</p>
        <Header color="teal" sub content="Change Password" />

        <Formik
          initialValues={{ newPassword: '', confirmPassword: '' }}
          validationSchema={passwordSchema}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            try {
              setSubmitting(false);
              console.log(values);
            } catch (error) {
              setErrors({ auth: error.message });
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting, dirty, isValid, errors }) => (
            <Form className="ui form">
              {errors.auth && (
                <Label content={errors.auth} color="red" className="error" />
              )}
              <TextInput
                type="password"
                name="newPassword"
                placeholder="Enter New Password"
              />
              <TextInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
              />
              <Button
                type="submit"
                content="Change password"
                size="large"
                color="teal"
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                style={{ marginBottom: '40px' }}
              />
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <p>For Facebook sign in password recovery</p>
        <Header color="teal" sub content="Facebook Account" />
        <Button
          as={Link}
          to="https://facebook.com"
          icon="facebook"
          content="Go To Facebook"
          color="facebook"
          style={{ marginBottom: '20px' }}
        />
      </div>
      <div>
        <p>For Google sign in password recovery</p>
        <Header color="teal" sub content="Google Account" />
        <Button
          as={Link}
          to="https://google.com"
          icon="google"
          content="Go To  Google"
          color="google plus"
          style={{ marginBottom: '20px' }}
        />
      </div>
    </Segment>
  );
};

export default AccountPage;
