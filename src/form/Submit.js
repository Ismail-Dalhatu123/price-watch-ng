import React from "react";
import { useFormikContext } from "formik";
import Loader from "../components/Loader";
import getDarkClass from "../utils/getDarkClass";

export default function Submit({ title, className = "" }) {
  const { handleSubmit, isSubmitting, errors } = useFormikContext();
  return (
    <button
      disabled={isSubmitting}
      className={`btn_submit ${isSubmitting ? "loading" : ""}  ${getDarkClass(
        "dark-br-dark"
      )} ${getDarkClass("bg-dark")} ${getDarkClass("")}`}
      value={title}
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        cursor:
          Object.keys(errors).length || isSubmitting
            ? "not-allowed"
            : "pointer",
      }}
      onClick={handleSubmit}
      type="submit"
    >
      {isSubmitting ? <Loader /> : title}
    </button>
  );
}
