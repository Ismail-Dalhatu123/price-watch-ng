import React from "react";
import { useFormikContext } from "formik";
import Error from "./Error";
import Places from "../components/Places";

export default function FromPlaces({ name }) {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <>
      <Places
        autoComplete="off"
        setAddress={(value) => {
          setFieldTouched(name);
          setFieldValue(name, value);
        }}
      />
      <span>{values[name]}</span>
      <Error error={errors[name]} touched={touched[name]} />
    </>
  );
}
