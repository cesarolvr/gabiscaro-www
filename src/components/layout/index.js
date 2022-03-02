import React, { useState } from "react";
import classnames from "classnames";

import LogoMaster from "@components/logoMaster";

export const LoaderContext = React.createContext(false);

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
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
