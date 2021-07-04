import React from "react";
import { Formik } from "formik";

export default function Form({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) {
  return (
    <div className="form">
      <Formik
        cl
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {() => children}
      </Formik>
    </div>
  );
}
