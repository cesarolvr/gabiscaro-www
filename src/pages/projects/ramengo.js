import React from "react";
import { Router } from "@reach/router";

import RamenGo from "@components/ramengo";
import Header from "@components/Header";

const Projects = () => {
  return (
    <div>
      <Header />
      <Router basepath="/projects">
        <RamenGo path="/ramengo" />
      </Router>
    </div>
  );
};
export default Projects;
