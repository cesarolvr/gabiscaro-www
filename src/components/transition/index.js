import React, { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const TransitionWrapper = ({ children, path }) => {
  const [currentPath, setCurrentPath] = useState(null);
  useEffect(() => {
    setCurrentPath(path);
  }, [path]);

  useEffect(() => {
    setCurrentPath(window.location);
  }, []);
  return (
    <SwitchTransition>
      <CSSTransition key={currentPath} timeout={300} classNames="animation a">
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};
export default TransitionWrapper;
