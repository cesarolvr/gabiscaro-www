import React, { useState } from "react";
import classnames from "classnames";

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
            {children}
          </div>
        )}
      </LoaderContext.Consumer>
    </LoaderContext.Provider>
  );
};

export default Layout;
