import React from "react";
import Loader from "@components/loader";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Loader /> */}
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
