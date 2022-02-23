import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import "./index.scss";

import favicon from "../../images/favicon.svg";

import Logo from "@components/Logo";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gabiscaro | Designer and illustrator</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
      </Helmet>
      <Link className="link" to="/illustrations">
        <div className="data-scroll" data-scroll>
          <div className="target">illustrations</div>
        </div>
      </Link>
      <Link className="link -logo" to="/">
        <div className="logo-wrapper data-scroll" data-scroll>
          <div className="opacity" style={{ transitionDelay: "400ms" }}>
            <Logo />
          </div>
        </div>
      </Link>
      <Link className="link" to="/about">
        <div className="data-scroll" data-scroll>
          <div className="target" style={{ animationDelay: "80ms" }}>
            about/say hi
          </div>
        </div>
      </Link>
      <hr className="line" data-scroll />
    </header>
  );
};

export default Header;
