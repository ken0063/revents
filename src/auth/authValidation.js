import * as Yup from 'yup';

export const signUpFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Field is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,20})/,
      'Password must be at least 6 characters and must contain a digit, a lowercase character and an uppercase character',
    ),
  displayName: Yup.string().required('Field is required'),
});

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Field is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,20})/,
      'Password must be at least 6 characters and must contain a digit, a lowercase character and an uppercase character',
    ),
});

export const passwordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('Field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,20})/,
      'Password must be at least 6 characters and must contain a digit, a lowercase character and an uppercase character',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Password does not  match',
  ),
});
