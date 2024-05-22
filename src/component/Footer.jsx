import React from "react";
import logo from "../images/logo.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-12">
            <div className="line"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
            <div className="k-logo">
              <img src={logo} className="img-responsive" alt="logo" />
              <p>
                Jester is an enigmatic figure challenging norms with playful
                rebellion, drawing a community enamored by chaos as a catalyst
                for change.
              </p>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="linek">
              <h5>Navigate</h5>
              <ul>
                <li>
                  <a href="#About">About Us</a>
                </li>
                <li>
                  <a href="#PROTOCOL">Features</a>
                </li>
                <li>
                  <a href="#Roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#Community">Community</a>
                </li>
                <li>
                  <a href="#Jesterx">Jester X NFTs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="linek sdc">
              <h5>Contact</h5>
              <ul>
                <li>
                  <a href="/">
                    <span>
                      <i class="bi bi-facebook"></i>
                    </span>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>
                      <i class="bi bi-instagram"></i>
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>
                      <i class="bi bi-twitter-x"></i>
                    </span>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>
                      <i class="bi bi-telegram"></i>
                    </span>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row xswz">
          <div className="col-12 col-sm-12 col-lg-12 d-flex justify-content-between align-items-center">
            <div className="Copyri">
              <p>© Copyright 2024, All Rights Reserved by Edero </p>
            </div>
            <div className="Copyri vfx-All">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
