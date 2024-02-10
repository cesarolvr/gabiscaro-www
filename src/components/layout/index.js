import React, { useEffect, useState } from "react";
import classnames from "classnames";

import LogoMaster from "@components/logoMaster";
import CSDA from "@components/CSDA";

export const LoaderContext = React.createContext(false);

const Layout = ({ children, path }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const gatsbyWrapper = document.querySelector("#gatsby-focus-wrapper");
    const routerWrapper = document.querySelector(
      ".scroll-content div[tabindex='-1']"
    );

    gatsbyWrapper && gatsbyWrapper.removeAttribute("tabIndex");
    routerWrapper && routerWrapper.removeAttribute("tabIndex");
  }, []);

  const page = {
    "/": "-home",
    "/about/": "-about",
    "/illustrations/": "-illustrations",
  };

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      <LoaderContext.Consumer>
        {({ isLoading }) => (
          <div
            className={classnames("main", {
              "-loading": isLoading,
              [page[path]]: page[path],
              ["-cases"]: !page[path],
            })}
          >
            <>
              {children}
              <LogoMaster className="-hack" />
              <CSDA />
            </>
          </div>
        )}
      </LoaderContext.Consumer>
    </LoaderContext.Provider>
  );
};

export default Layout;
