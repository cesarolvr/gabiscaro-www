import React from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";
import Header from "@components/Header";

const Projects = () => {
  return (
    <>
      <Header />
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </>
  );
};
export default Projects;
