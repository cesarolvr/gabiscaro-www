import * as React from "react";

import "./index.scss";

const Contact = ({ title }) => {
  return (
    <section className="contact">
      {/* <div className="firstgroup">
      <svg width="224" height="375" viewBox="0 0 224 375" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M120.795 9.09005L223.546 109.251C207.537 125.66 187.397 130.903 167.947 131.212C141.308 131.643 125.214 148.14 125.44 174.782C125.611 194.233 120.866 214.496 104.857 230.905C88.8481 247.315 68.7085 252.558 49.2586 252.867C22.6193 253.298 6.52519 269.794 6.75154 296.436C6.92258 315.888 2.17792 336.151 -13.8312 352.56C-46.1892 385.727 -94.3471 373.49 -120.839 366.674L-120.796 366.63L-224 266.028C-207.991 249.619 -187.851 244.375 -168.401 244.066C-141.762 243.635 -125.668 227.139 -125.894 200.497C-126.065 181.045 -121.321 160.782 -105.312 144.373C-89.3024 127.964 -69.1628 122.721 -49.7128 122.412C-23.0735 121.98 -6.97946 105.484 -7.20581 78.8422C-7.37685 59.3906 -2.63219 39.1277 13.377 22.7185C45.8199 -10.5353 94.2607 2.31768 120.752 9.1336L120.795 9.09005Z" fill="#D604C1"/>
</svg>


      </div>
      <div className="lastgroup">
        <svg
          width="289"
          height="448"
          viewBox="0 0 289 448"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.5431 190.963L125.968 252.657L178.881 204.076L166.293 277.762L235.582 283.752L178.347 326.272L223.421 383.324L155.065 369.756L149.534 444.466L110.08 382.755L57.1962 431.353L69.7546 357.649L0.495584 351.678L57.7008 309.139L12.6563 252.106L80.9826 265.655L86.5431 190.963Z"
            fill="#3DDC97"
          />
          <path
            d="M262 170C308.944 170 347 131.944 347 85C347 38.0558 308.944 0 262 0C215.056 0 177 38.0558 177 85C177 131.944 215.056 170 262 170Z"
            fill="#FF499E"
          />
          <path
            d="M114 447.519C114 447.759 114 448 114 448H214.527C214.527 447.759 214.527 447.519 214.527 447.519C214.527 407.105 248.036 374.148 289.5 374.148V276C192.589 276 114 352.738 114 447.519Z"
            fill="#9CEAEF"
          />
        </svg>
      </div> */}
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
