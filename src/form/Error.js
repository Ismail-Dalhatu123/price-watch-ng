import React from "react";

export default function Error({ error, touched }) {
  if (!touched || !error) return null;
  return <span className="error">{error}</span>;
}
