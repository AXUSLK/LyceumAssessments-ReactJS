import React, { useState } from "react";
import logo from "../../assets/images/LYA__LOGO.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div class="phStickyWrap">
      <header id="pageHeader" class="w-100 headerFixer">
        <div class="container">
          <div class="hdHolder position-relative pt-2 pb-2 pt-lg-4 pb-lg-4 pt-xl-7 pb-xl-7">
            <div class="row">
              <div class="col-4 col-md-2">
                <div class="logo mt-1">
                  <a href="javascript:void(0);">
                    <img src={logo} class="img-fluid" alt="" />
                  </a>
                </div>
              </div>
              <div class="col-8 col-md-10 position-static">
                <nav
                  id="pageNav"
                  class="navbar navbar-expand-md navbar-dark justify-content-end p-0 align-items-start position-static"
                >
                  <div
                    class="collapse navbar-collapse pageMainNavCollapse justify-content-end"
                    id="pageMainNavCollapse"
                  >
                    <ul class="navbar-nav mainNavigation fwSemi pt-md-2">
                      <li class="nav-item">
                        <a class="nav-link" href="../../index.js">
                          Home <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#scrollToAbout">
                          About Us
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#scrollToWhy">
                          Why?
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#scrollToCambridge">
                          Cambridge
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#scrollToContact">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="javascript:void(0);"
                    class="btn btn-info font-weight-normal text-capitalize hdBtn ml-md-3 ml-md-6 ml-lg-12 position-relative border-0 p-0"
                    data-hover="Get Started"
                  >
                    <span class="d-block btnText">Candidate Registration </span>
                  </a>

                  <button
                    class="navbar-toggler pageNavOpener ml-3"
                    type="button"
                    data-toggle="collapse"
                    data-target="#pageMainNavCollapse"
                    aria-controls="pageMainNavCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
