import React from "react";
import Twitter from "../images/x.png";
import Discoard from "../images/d.png";
import Telegram from "../images/t.png";

export default function Community() {
  return (
    <div>
      <section className="About-p" id="Community">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div
                class="Welcome Igniting Magicss cdx"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>Jester X Community</span>
                <h2>
                  Connect with us on social media for the latest
                  <br /> updates and announcements
                </h2>
                <ol className="socialx">
                  <li>
                    <a href="/">
                      <img src={Twitter} alt="Twitter" />
                      <strong>Twitter</strong>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Discoard} alt="Discoard" />
                      <strong>Discoard</strong>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Telegram} alt="Telegram" />
                      <strong>Telegram</strong>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
