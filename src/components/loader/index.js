import React from "react";
import classnames from "classnames";

import "./index.scss";

const Loader = ({ isOpened = false }) => {
  return (
    <div
      className={classnames("loader", {
        ["-opened"]: isOpened,
      })}
    >
      loader
    </div>
  );
};

export default Loader;
