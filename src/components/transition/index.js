import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TransitionWrapper = ({ children, path }) => {
  const [currentPath, setCurrentPath] = useState(null);
  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  useEffect(() => {
    setCurrentPath(window.location);
  }, []);
  return (
    <TransitionGroup className="animation-wrapper">
      <CSSTransition key={currentPath} timeout={1000} unmountOnExit>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
export default TransitionWrapper;
