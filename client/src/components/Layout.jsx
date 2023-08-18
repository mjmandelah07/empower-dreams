import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function Layout() {
  const [scrolling, setScrolling] = useState(false);
  console.log(scrolling);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`container-fluid layout-container ${
          scrolling ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link
                className={`navbar-brand ${scrolling ? "scrolled" : ""}`}
                to="/"
              >
                Aramid
              </Link>
              <button
                className="navbar-toggler navbar-light text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-lg-end navbar-mobile"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${scrolling ? "scrolled" : ""}`}
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${scrolling ? "scrolled" : ""}`}
                      to="#"
                    >
                      Study Plans
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${scrolling ? "scrolled" : ""}`}
                      to="#"
                    >
                      Financial Need
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${scrolling ? "scrolled" : ""}`}
                      to="#"
                      tabIndex="-1"
                    >
                      Support
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${scrolling ? "scrolled" : ""}`}
                      to="#"
                      tabIndex="-1"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Outlet />
    </>
  );
}
