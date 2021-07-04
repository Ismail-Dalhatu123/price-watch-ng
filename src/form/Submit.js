import React from "react";
import { useFormikContext } from "formik";
import Loader from "../components/Loader";
import getDarkClass from "../utils/getDarkClass";

export default function Submit({ title, className = "" }) {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <button
      disabled={isSubmitting}
      className={`btn_submit  ${getDarkClass("dark-br-dark")} ${getDarkClass(
        "bg-dark"
      )} ${getDarkClass("")}`}
      value={title}
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      onClick={handleSubmit}
      type="submit"
    >
      {isSubmitting ? <Loader /> : title}
    </button>
  );
}
