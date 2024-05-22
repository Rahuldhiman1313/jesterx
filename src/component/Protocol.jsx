import React from "react";
import xdv from "../images/Chartx.png";
import Candles from "../images/Candles.png";
import Chartx3 from "../images/Chartx3.png";
import Flying from "../images/Flying-Coins.png";
import Flyingsd from "../images/Flyingsd.png";

export default function Protocol() {
  return (
    <section className="About-p vbx" id="PROTOCOL">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div
              className="Welcome Igniting Magicss"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>Jester X Protocol</span>
              <h2>
                Revolutionizing
                <br />
                Cryptocurrency with Chaos
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row fairss">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="tokenc" data-aos="fade-up" data-aos-duration="1000">
              <img src={xdv} className="w" alt="" />
              <div className="distribution">
                <span>Jester X Protocol</span>
              </div>
              <h3>Innovative Fair Distribution</h3>
              <p>
                The project's approach to fair token distribution is akin to a
                playful game of chance, where tokens are directed to a black
                hole address, ensuring transparency and fairness in the
                distribution process.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="tokenc" data-aos="fade-up" data-aos-duration="2000">
              <img src={Candles} className="w" alt="" />
              <div className="distribution">
                <span>Jester X Protocol</span>
              </div>
              <h3>Automatic Market Making: </h3>
              <p>
                Like a mischievous trickster, the project employs automatic
                market making to create a spiral upward trend in token value,
                fostering a dynamic ecosystem where value appreciates over time,
                much like the unpredictable twists and turns of a jestful prank.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="tokenc" data-aos="fade-up" data-aos-duration="3000">
              <img src={Chartx3} className="w" alt="" />
              <div className="distribution">
                <span>Jester X Protocol</span>
              </div>
              <h3>Complete Decentralization:</h3>
              <p>
                Jester X takes pride in its fully decentralized nature,
                mirroring the chaotic yet harmonious nature of a circus
                performance. Operating entirely on smart contracts, it removes
                centralized control, fostering a trustless and transparent
                environment where all participants have equal footing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container biux">
        <div className="row fairss">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div
              className="tokenc whimss"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="Demand">
                <div className="distribution">
                  <span>Jester X Protocol</span>
                </div>
                <h3>Efficient Supply-Demand Mechanism: </h3>
                <p>
                  The project's mechanism mirrors the fluidity of a jestful
                  dance, ensuring that supply meets demand seamlessly.
                </p>
                <p>
                  By allowing the protocol to dictate supply and demand
                  dynamics, it aims to create a balanced ecosystem where token
                  value is determined by the whims of market forces, much like
                  the unpredictable antics of a jester.
                </p>
                <a href="#" className="JOIN">
                  JOIN US NOW
                </a>
              </div>
              <div className="supply">
                <img src={Flying} className="w" alt="" />
                <img src={Flyingsd} className="wcx" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
