import React from "react";
import { Router } from "@reach/router";

import RamenGo from "@components/ramengo";
import Header from "@components/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <Router basepath="/projects">
        <RamenGo path="/ramengo" />
      </Router>
    </>
  );
};
export default Projects;
