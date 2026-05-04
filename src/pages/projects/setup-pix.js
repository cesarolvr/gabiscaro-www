import React from "react";
import { Router } from "@reach/router";

import SetupPix from "@components/setupPix";
import SetupPixGate from "@components/setupPixGate";

const Projects = () => (
  <SetupPixGate>
    <Router basepath="/projects">
      <SetupPix path="/setup-pix" />
    </Router>
  </SetupPixGate>
);

export default Projects;
