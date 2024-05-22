import React from "react";
import coinsx from "../images/cxactive.png";
export default function About() {
  return (
    <section className="About-p nbxp" id="About">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div
              className="Welcome Igniting"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>About Us</span>
              <h2>Meet Jester: Igniting Change Through Chaos</h2>
              <p>
                In a world tired of routine, emerges the Jester—an enigmatic
                figure challenging norms with playful rebellion, drawing a
                community enamored by chaos as a catalyst for change.
              </p>
              <ul>
                <li>
                  <strong>Innovative Finance:</strong> The Jester X Protocol
                  disrupts traditional finance by introducing a token driven by
                  community and creativity, setting the stage for a future where
                  unpredictability fuels innovation.
                </li>
                <li>
                  <strong>A Movement for Change:</strong> More than a digital
                  currency, Jester X is a movement that empowers its community
                  to use chaos as a tool for societal change, demonstrating its
                  positive potential.
                </li>
                <li>
                  <strong>United Vision:</strong>Facing challenges strengthens
                  and unites the Jester X community under a shared vision of a
                  world where freedom and innovation thrive.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div
              className="bh-x asdsa"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src={coinsx} className="xxxqw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
