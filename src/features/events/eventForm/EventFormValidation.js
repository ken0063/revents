import * as Yup from 'yup';

export const eventFormSchema = Yup.object().shape({
  title: Yup.string().required('Field is required'),
  category: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
  city: Yup.string().required('Field is required'),
  venue: Yup.string().required('Field is required'),
  hostedBy: Yup.string().required('Field is required'),
  date: Yup.date().required('Field is required'),
});
