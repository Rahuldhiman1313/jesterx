import React from "react";
import helo from "../images/helo.png";
import copyx from "../images/copy.png";
import jeater from "../images/jeater.png";

export default function Unleash() {
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Link copied to clipboard:", text);
        // Optionally, you can provide some visual feedback to the user
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
        alert("Failed to copy link to clipboard.");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row fairss" data-aos="fade-up" data-aos-duration="1000">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="tokenc whimss codesx csxzwq">
              <div className="Demand">
                <div className="Address">
                  <span>Wallet Address qr code</span>
                </div>
                <h3>Unleash the Jester X chaos!</h3>
                <ul className="blockchains">
                  <li>Scan the Jester X wallet address.</li>
                  <li>
                    Transfer 80 USDT to activate your Jester X rebellion ticket!
                  </li>
                  <li>
                    Send your blockchain transfer transaction to our email
                    address: support@jesterx.io.
                  </li>
                  <li>
                    Jester will check the email after finishing the mission in
                    orbit. Evil Smile…
                  </li>
                  <li>
                    Join our Telegram and Twitter to be ready for the
                    skyrocketing Chaos!
                  </li>
                </ul>
              </div>

              <div className="supply">
                <img src={helo} className="w" alt="" />
                <div
                  className="cpx"
                  href="https://valuezone.org/signup?ref=R9YHQZ"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopy(e.target.href);
                  }}
                >
                  <a>https://valuezone.org/signup?ref=R9YHQZ</a>
                  <span
                    href="https://valuezone.org/signup?ref=R9YHQZ"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCopy(e.target.href);
                    }}
                  >
                    <img src={copyx} className="img-fluid" alt="copy" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bccdd">
        <div className="row fairss" data-aos="fade-up" data-aos-duration="1000">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="tokenc whimss codesx Joker">
              <div className="Demand">
                <div className="Address Jesterasas">
                  <span>Get ready for the Jester X Joker Series NFTs—</span>
                </div>
                <h3 className="coming">
                  Coming
                  <br />
                  Soon
                </h3>
              </div>

              <div className="supply">
                <img src={jeater} className="w" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
