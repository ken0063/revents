import { useField } from 'formik';
import React from 'react';
import { FormField, Select } from 'semantic-ui-react';
import './_Input.scss';

const SelectInput = ({ label, ...restProps }) => {
  const [field, meta, helpers] = useField(restProps);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value || null}
        onChange={(e, data) => helpers.setValue(data.value)}
        onBlur={() => helpers.setTouched(true)}
        {...restProps}
      />
      {meta.touched && meta.error ? (
        <p className="input-error">
          <b>{meta.error}</b>
        </p>
      ) : null}
    </FormField>
  );
};

export default SelectInput;
