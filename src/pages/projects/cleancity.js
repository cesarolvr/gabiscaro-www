import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import CleanCity from "@components/cleanCity";
import Header from "@components/Header";
import Loader from "@components/loader";

const Projects = () => {
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 2500);
  }, []);
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
