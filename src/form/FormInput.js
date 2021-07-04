import React from "react";
import { useFormikContext } from "formik";
import Error from "./Error";

export default function FormInput({
  name,
  className = "",
  inputClass = "",
  ...others
}) {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <>
      <div className={`form_input flex ${className}`}>
        <input
          autoComplete="off"
          className={`input ${inputClass}`}
          onBlur={() => setFieldTouched(name)}
          onChange={(value) => setFieldValue(name, value.target.value)}
          value={values[name]}
          {...others}
        />
      </div>
      <Error error={errors[name]} touched={touched[name]} />
    </>
  );
}
