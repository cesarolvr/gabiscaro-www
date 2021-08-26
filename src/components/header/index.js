import * as React from "react";

import "./index.scss";

import Logo from '@components/Logo'

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">illustration</h1>
            <Logo />
            <a className="link" href="">
                about/say hi
            </a>
        </header>
    );
};

export default Header;
