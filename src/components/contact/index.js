import * as React from "react";

import "./index.scss";

const Contact = ({ title }) => {
  return (
    <section className="contact">
      <div className="container">
        <div className="firstgroup">
          <svg
            width="292"
            height="292"
            viewBox="0 0 292 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="red"
          >
            <path
              d="M276.694 189.517L276.612 189.601V189.685C278.694 222.443 257.714 252.056 226.775 260.151L226.694 260.193C209.633 288.002 175.714 299.327 146 287.121C116.286 299.327 82.3673 288.002 65.3061 260.193L65.2245 260.151C34.2857 252.056 13.3061 222.443 15.3878 189.685V189.601L15.3061 189.517C-5.10204 164.267 -5.10204 127.691 15.3061 102.483L15.3878 102.399V102.315C13.3061 69.5569 34.2857 39.9444 65.2245 31.8492L65.3061 31.8073C82.3673 3.99837 116.286 -7.32653 146 4.87919C175.714 -7.32653 209.633 3.99837 226.694 31.8073L226.775 31.8492C257.714 39.9444 278.694 69.5569 276.612 102.315V102.399L276.694 102.483C297.102 127.691 297.102 164.267 276.694 189.517Z"
              fill="#FF4522"
             
            />
          </svg>
          <svg
            width="448"
            height="375"
            viewBox="0 0 448 375"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="purple"
          >
            <path
              d="M344.795 9.09006L447.546 109.251C431.537 125.66 411.397 130.903 391.947 131.212C365.308 131.643 349.214 148.14 349.44 174.782C349.611 194.233 344.866 214.496 328.857 230.905C312.848 247.315 292.709 252.558 273.259 252.867C246.619 253.298 230.525 269.794 230.752 296.436C230.923 315.888 226.178 336.151 210.169 352.56C177.811 385.727 129.653 373.49 103.161 366.674L103.204 366.63L0 266.028C16.0091 249.619 36.1487 244.375 55.5987 244.066C82.238 243.635 98.3321 227.139 98.1057 200.497C97.9347 181.045 102.679 160.782 118.688 144.373C134.698 127.964 154.837 122.721 174.287 122.412C200.926 121.98 217.021 105.484 216.794 78.8422C216.623 59.3906 221.368 39.1277 237.377 22.7185C269.82 -10.5353 318.261 2.31768 344.752 9.1336L344.795 9.09006Z"
              fill="#D604C1"
             
            />
          </svg>
          <svg
            width="85"
            height="181"
            viewBox="0 0 85 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="yellow"
          >
            <path
              d="M42.5 181C19.2262 181 0 161.625 0 138.172V42.8282C0 19.3746 19.2262 0 42.5 0C65.7738 0 85 19.3746 85 42.8282V138.172C84.494 161.625 65.7738 181 42.5 181Z"
              fill="#FFDE60"
             
            />
          </svg>
        </div>
        <div className="lastgroup">
          <svg
            width="236"
            height="255"
            viewBox="0 0 236 255"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="green"
          >
            <path
              d="M86.5431 0.963004L125.968 62.6565L178.881 14.0764L166.293 87.7623L235.582 93.7517L178.347 136.272L223.421 193.324L155.065 179.756L149.534 254.466L110.08 192.755L57.1962 241.353L69.7546 167.649L0.495584 161.678L57.7008 119.139L12.6563 62.1056L80.9826 75.6546L86.5431 0.963004Z"
              fill="#3DDC97"
              
            />
          </svg>
          <svg
            width="170"
            height="170"
            viewBox="0 0 170 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pink"
          >
            <path
              d="M85 170C131.944 170 170 131.944 170 85C170 38.0558 131.944 0 85 0C38.0558 0 0 38.0558 0 85C0 131.944 38.0558 170 85 170Z"
              fill="#FF499E"
              
            />
          </svg>
          <svg
            width="176"
            height="172"
            viewBox="0 0 176 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="blue"
          >
            <path
              d="M0 171.519C0 171.759 0 172 0 172H100.527C100.527 171.759 100.527 171.519 100.527 171.519C100.527 131.105 134.036 98.1482 175.5 98.1482V0C78.5893 0 0 76.7385 0 171.519Z"
              fill="#9CEAEF"
              
            />
          </svg>
        </div>
      </div>
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
