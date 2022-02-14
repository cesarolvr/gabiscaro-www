import React from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";

const Projects = () => {
  return (
    <div className="scroll-content">
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </div>
  );
};
export default Projects;
