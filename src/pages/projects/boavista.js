import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import BoaVista from "@components/boavista";
import Header from "@components/Header";
import Loader from "@components/loader";

import useBoaVistaParallax from "@hooks/useBoaVistaParallax";

const Projects = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  useBoaVistaParallax();
  return (
    <div className="scroll-content">
      <Loader isOpened={isOpened} />
      <Header />
      <Router basepath="/projects">
        <BoaVista path="/boavista" />
      </Router>
    </div>
  );
};
export default Projects;
