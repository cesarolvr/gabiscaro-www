import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import Blueberry from "@components/Blueberry";
import Header from "@components/Header";
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
      <Header />
      <Router basepath="/projects">
        <Blueberry path="/blueberry" />
      </Router>
    </div>
  );
};
export default Projects;
