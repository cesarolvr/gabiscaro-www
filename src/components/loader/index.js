import React from "react";
import classnames from 'classnames'

import "./index.scss";

const Loader = () => {
  return <div className={
    classnames("loader", {
      ['-opened']: false
    })
  }>loader</div>;
};

export default Loader;
