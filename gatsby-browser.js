import React from "react";
import Transition from "./src/components/transition";

// Styles
import "@src/styles/index.scss";

export const wrapPageElement = ({ element, props }) => {
    const { path } = props;
  return <Transition path={path}>{element}</Transition>;
};
