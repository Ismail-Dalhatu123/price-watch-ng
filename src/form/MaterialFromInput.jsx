import React from "react";
import { useFormikContext } from "formik";
import Error from "./Error";
import MaterialInput from "../components/MaterialInput";

export default function MaterialFormInput({
  name,
  className = "",
  inputClass = "",
  ...others
}) {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <>
        <MaterialInput
          autoComplete="off"
          // className={`input ${inputClass}`}
          onBlur={() => setFieldTouched(name)}
          onChange={(value) => setFieldValue(name, value.target.value)}
          value={values[name]}
          {...others}
        />
      <Error error={errors[name]} touched={touched[name]} />
    </>
  );
}
