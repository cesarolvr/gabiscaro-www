import React from "react";
import { Router } from "@reach/router";

import CleanCity from "@components/cleanCity";
import Header from "@components/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <Router basepath="/projects">
        <CleanCity path="/cleancity" />
      </Router>
    </>
  );
};
export default Projects;
