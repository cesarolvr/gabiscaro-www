import React from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";
import Header from "@components/Header";

const Projects = () => {
  return (
    <div>
      <Header />
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </div>
  );
};
export default Projects;
