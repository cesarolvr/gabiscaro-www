import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby-link";

import "./index.scss";

import favicon from "../../images/favicon.svg";

import Logo from "@components/Logo";
import { LoaderContext } from "@components/Layout";

const Header = ({ className = "" }) => {
  return (
    <LoaderContext.Consumer>
      {({ setIsLoading }) => (
        <header className={`header ${className}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Gabiscaro | Designer and illustrator</title>
            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          </Helmet>
          <div
            className="link -left"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/illustrations");
              }, 600);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
          >
            <div className="data-scroll" data-scroll>
              <div className="target">illustrations</div>
            </div>
          </div>
          <div
            className="logo"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/");
              }, 600);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
          >
            <div className="logo-wrapper data-scroll" data-scroll>
              <div className="opacity" style={{ transitionDelay: "400ms" }}>
                <Logo />
              </div>
            </div>
          </div>
          <div
            className="link -right"
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/about");
              }, 600);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
            }}
          >
            <div className="data-scroll" data-scroll>
              <div className="target" style={{ animationDelay: "80ms" }}>
                about
              </div>
            </div>
          </div>
          <hr className="line" data-scroll />
        </header>
      )}
    </LoaderContext.Consumer>
  );
};

export default Header;
