import * as React from "react";
import { Link } from "gatsby";

import "./index.scss";

import Logo from "@components/Logo";

const Header = ({className = ''}) => {
    return (
        <header className={`header ${className}`}>
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
