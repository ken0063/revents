import { useField, useFormikContext } from 'formik';
import React from 'react';
import { FormField } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './_Input.scss';

const DateInput = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);
  const { setFieldValue } = useFormikContext();
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <DatePicker
        {...field}
        {...restProps}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => setFieldValue(field.name, value)}
      />
      {meta.touched && meta.error ? (
        <p className="input-error">
          <b>{meta.error}</b>
        </p>
      ) : null}
    </FormField>
  );
};

export default DateInput;
