import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import CleanCity from "@components/cleanCity";
import Header from "@components/Header";
import Loader from "@components/loader";

import useCleanCityParallax from "@hooks/useCleanCityParallax";

const Projects = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  useCleanCityParallax()
  return (
    <div className="scroll-content">
       <Loader isOpened={isOpened} />
      <Header />
      <Router basepath="/projects">
        <CleanCity path="/cleancity" />
      </Router>
    </div>
  );
};
export default Projects;
