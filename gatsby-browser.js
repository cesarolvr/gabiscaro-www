import React from "react";
import Layout from "./src/components/Layout";

// Styles
import "@src/styles/index.scss";

export const wrapPageElement = ({ element, props }) => {
  const { path } = props;
  return <Layout>{element}</Layout>;
};
