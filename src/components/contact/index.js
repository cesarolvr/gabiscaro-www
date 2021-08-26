import * as React from "react";

import "./index.scss";

const Contact = () => {
    return (
        <section className="contact">
            <h1 className="title">Don't be shy, say hi!</h1>
           <p className="text">
           You can contact me through <a href="" className="linkedin">LinkedIn</a>, <a href="" className="instagram">Instagram</a>, <a href="" className="dribbble">Dribbble</a>, or <a href="" className="email">Email <small>{'{email@gabiscaro.com}'}</small></a> 
           </p>
        </section>
    );
};

export default Contact;
