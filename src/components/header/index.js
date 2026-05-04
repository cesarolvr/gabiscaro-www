import * as React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby-link";
import { useLocation } from "@reach/router";

import "./index.scss";

import favicon from "../../images/favicon.svg";

import Logo from "@components/Logo";
import { LoaderContext } from "@components/Layout";

const Header = ({ className = "" }) => {
  const location = useLocation();
  const isHome = location?.pathname === "/";
  const isAbout = location?.pathname === "/about";
  const isWork = isHome || location?.pathname?.startsWith("/projects");

  const goTo = (path, setIsLoading) => {
    navigate(path);
  };

  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <header className={`header ${className}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Gabiscaro | Designer and illustrator</title>
            <link rel="icon" type="image/svg+xml" href={favicon} sizes="any" />
          </Helmet>
          <div className="pill-bg" />
          <div className="logo" onClick={() => goTo("/", setIsLoading)}>
            <div className="logo-wrapper data-scroll" data-scroll>
              <div>
                <Logo color="#400039" />
              </div>
            </div>
          </div>
          <div className="links">
            <button
              type="button"
              className={`link ${isWork ? "-active" : ""}`}
              onClick={() => goTo("/", setIsLoading)}
            >
              WORK
            </button>
            <button
              type="button"
              className={`link ${isAbout ? "-active" : ""}`}
              onClick={() => goTo("/about", setIsLoading)}
            >
              ABOUT
            </button>
          </div>
        </header>
      )}
    </LoaderContext.Consumer>
  );
};

export default Header;
