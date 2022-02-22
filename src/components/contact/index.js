import * as React from "react";

import "./index.scss";

const Contact = ({ title }) => {
  return (
    <section className="contact">
      <div className="title data-scroll" data-scroll>
        <div className="target">{title || `Don't be shy, say hi!`}</div>
      </div>
      <div className="text data-scroll" data-scroll>
        <span className="target">
          You can contact me through{" "}
          <a
            href="https://www.linkedin.com/in/gabriela-bisc%C3%A1ro-4b90a78a/"
            target="_blank"
            className="linkedin"
          >
            LinkedIn
          </a>
          ,{" "}
        </span>
      </div>
      <div className="text data-scroll" data-scroll>
        <span className="target">
          <a
            href="https://www.instagram.com/gabiscaroo_/"
            target="_blank"
            className="instagram"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="https://dribbble.com/gabiscaro"
            target="_blank"
            className="dribbble"
          >
            Dribbble
          </a>
          , or{" "}
          <a
            href="mailto:gabrielasbiscaro@gmail.com"
            className="email"
            target="_blank"
          >
            Email
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
