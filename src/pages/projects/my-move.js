import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import MyMove from "@components/myMove";
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
        <MyMove path="/my-move" />
      </Router>
    </div>
  );
};

export default Projects;
