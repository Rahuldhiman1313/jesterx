import React from "react";
import rocket from "../images/rocket.png";
import Jxo from "../images/jaster.png";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="Welcome" data-aos="fade-up">
              <span>Welcome to jester x</span>
              <h1>
                Awakening the Soul of the Jester,
                <strong>Igniting an Innovation Revolution!</strong>
              </h1>
              <a href="#" className="JOIN">
                JOIN US NOW
              </a>
            </div>

            <div className="gxod" data-aos="zoom-in">
              <div className="x-x">
                <img src={rocket} className="img-fluid " alt="rocket" />
              </div>
              <div className="x-x2 wobble">
                <img src={Jxo} className="img-fluid" alt="man" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
