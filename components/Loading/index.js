import React from "react";

import Spinner from "../spinner";

export default function loader({ text, children }) {
  return (
    <div className="loder-table-form">
      <Spinner />
      <span>{text}</span>
      {children}
    </div>
  );
}
