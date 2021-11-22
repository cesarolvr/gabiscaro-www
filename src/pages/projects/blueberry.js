import React from "react";
import { Router } from "@reach/router";

import Blueberry from "@components/Blueberry";
import Header from "@components/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <Router basepath="/projects">
        <Blueberry path="/blueberry" />
      </Router>
    </>
  );
};
export default Projects;
