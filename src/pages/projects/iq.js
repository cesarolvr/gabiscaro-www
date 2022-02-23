import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import IQ from "@components/Iq";
import Loader from "@components/loader";

const Projects = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);
  return (
    <div className="scroll-content">
      <Loader isOpened={isOpened} />
      <Router basepath="/projects">
        <IQ path="/iq" />
      </Router>
    </div>
  );
};
export default Projects;
