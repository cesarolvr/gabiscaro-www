import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

import "./index.scss";

import favicon from '../../images/favicon.svg';


import Logo from "@components/Logo";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gabiscaro | Designer and illustrator</title>
        <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        
      </Helmet>
      <Link className="title" to="/illustrations">
        illustrations
      </Link>
      <Link className="title" to="/">
        <Logo />
      </Link>
      <Link className="link" to="/about">
        about/say hi
      </Link>
    </header>
  );
};

export default Header;
