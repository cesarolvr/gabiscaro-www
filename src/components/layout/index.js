import React, { useEffect, useState } from "react";
import classnames from "classnames";

import LogoMaster from "@components/logoMaster";

export const LoaderContext = React.createContext(false);

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const gatsbyWrapper = document.querySelector("#gatsby-focus-wrapper");
    const routerWrapper = document.querySelector(".scroll-content div[tabindex='-1']");
    
    gatsbyWrapper && gatsbyWrapper.removeAttribute("tabIndex");
    routerWrapper && routerWrapper.removeAttribute("tabIndex");
  }, []);
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
            })}
          >
            <>
              {children}
              <LogoMaster className="-hack" />
            </>
          </div>
        )}
      </LoaderContext.Consumer>
    </LoaderContext.Provider>
  );
};

export default Layout;
