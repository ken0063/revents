import { useField } from 'formik';
import React from 'react';
import { FormField } from 'semantic-ui-react';
import './_Input.scss';

const TextInput = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <input {...field} {...restProps} />
      {meta.touched && meta.error ? (
        <p className="input-error">
          <b>{meta.error}</b>
        </p>
      ) : null}
    </FormField>
  );
};

export default TextInput;
