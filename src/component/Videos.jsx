import React from "react";
import Browserxx from "../images/Browser.png";
import ReactPlayer from "react-player";

export default function Videos() {
  return (
    <section className="About-p vbx">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div
              className="Welcome Igniting Magicss"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>Jester X:Unveiling</span>
              <h2>
                Mastery of Fair Play and
                <br /> Decentralized Magic
              </h2>
              {/* <img src={Browserxx} alt="" className="img-fluid" /> */}
              <div className="videox">
                <ReactPlayer
                  width={"100%"}
                  height={600}
                  url="https://www.youtube.com/watch?v=ztVV54sPOns"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
