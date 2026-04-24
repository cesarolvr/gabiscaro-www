import * as React from "react";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby-link";
import { useLocation } from "@reach/router";

import "./index.scss";

import favicon from "../../images/favicon.svg";

import Logo from "@components/Logo";
import { LoaderContext } from "@components/Layout";
import portfolioProjects from "../../data/portfolioProjects";

const Header = ({ className = "" }) => {
  const location = useLocation();
  const isHome = location?.pathname === "/";
  const isAbout = location?.pathname === "/about";
  const isWork = isHome;

  const currentProject = portfolioProjects.find(
    (p) => location?.pathname === p.newRoute
  );
  const theme = currentProject?.cardTheme ?? null;
  const pillBorder = theme?.border ?? "#9ceaef";
  const textColor = theme?.fg ?? "#400039";

  const goTo = (path, setIsLoading) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(path);
    }, 600);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <header className={`header ${className}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Gabiscaro | Designer and illustrator</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          </Helmet>
          <div className="pill-bg" style={{ borderColor: pillBorder }} />
          <div className="logo" onClick={() => goTo("/", setIsLoading)}>
            <div className="logo-wrapper data-scroll" data-scroll>
              <div>
                <Logo color={textColor} />
              </div>
            </div>
          </div>
          <div className="links">
            <button
              type="button"
              className={`link ${isWork ? "-active" : ""}`}
              style={{ color: textColor }}
              onClick={() => goTo("/", setIsLoading)}
            >
              WORK
            </button>
            <button
              type="button"
              className={`link ${isAbout ? "-active" : ""}`}
              style={{ color: textColor }}
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
