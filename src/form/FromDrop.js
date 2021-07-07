import React from "react";
import { useFormikContext } from "formik";
import Error from "./Error";
import CustomSelect from "../components/CustomSelect";

export default function FromDrop({
  name,
  className = "",
  inputClass = "",
  options,
  depends = false,
  ...others
}) {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  console.log(depends);
  return (
    <>
      <CustomSelect
        className={`form_input flex ${className}`}
        options={
          depends !== false
            ? options.filter((i) => i.depends === values[depends])
            : options
        }
        title={others.placeholder}
        onSelect={(val) => setFieldValue(name, val)}
      />
      <div>
        {/* <select
          style={{ color: "#475f7c" }}
          className={`input ${inputClass}`}
          onBlur={() => setFieldTouched(name)}
          onChange={(value) => setFieldValue(name, value.target.value)}
          value={values[name]}
        >
          <option value="">{others.placeholder}</option>
          {depends !== false && values[depends] !== ""
            ? options
                .filter((i) => i.depends === values[depends])
                .map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))
            : options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
        </select> */}
      </div>
      <Error error={errors[name]} touched={touched[name]} />
    </>
  );
}
