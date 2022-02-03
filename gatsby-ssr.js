import React from "react";

// Contexts
import Layout from "./src/components/Layout";

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
