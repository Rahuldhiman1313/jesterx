import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { ChevronLeft, X } from "lucide-react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [subActive, setSubActive] = useState(false);
  const openmenu = () => {
    setActive(true);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <section className="wrapper">
          <div className="header-item-left">
            <Link to="/" className="brand">
              <img src={logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="header-item-center">
            <div
              onClick={() => {
                setActive(false);
                setSubActive(false);
              }}
              className={`overlay ${active ? "active" : ""}`}
            ></div>
            <nav className={`menu ${active ? "active" : ""}`} id="menu">
              <div className="menu-mobile-header">
                <button
                  onClick={() => setSubActive(false)}
                  type="button"
                  className="menu-mobile-arrow"
                >
                  <ChevronLeft />
                </button>
                <div className="menu-mobile-title"></div>
                <button
                  onClick={() => setActive(false)}
                  type="button"
                  className="menu-mobile-close"
                >
                  <X />
                </button>
              </div>
              <ul className="menu-section">
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#About">About Us</a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#PROTOCOL" className="contsss">
                    Features
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Roadmap" className="contsss">
                    Roadmap
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Jesterx" className="contsss">
                    Jester X NFTs
                  </a>
                </li>
                <li onClick={() => setActive(false)} className="menu-item">
                  <a href="#Community" className="contsss">
                    Community
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="#">White paper</a>
              </li>
            </ul>
          </div>
          <div className="header-item-right">
            <div className="main-icon-form-media">
              <div className="wsdd">
                <ul>
                  <li className="menu-item">
                    {/* <a
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Buy Now
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <button
              type="button"
              className="menu-mobile-toggle"
              onClick={openmenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};
