import React from "react";

import headerImg from "../../assets/images/header.png";
// import ai from '../../assets/ai.png';

import "./header.css";

const Header = () => (
  <section class="introBlock d-flex w-100 position-relative text-white bg-secondary">
    <div class="w-100 d-flex align-items-center">
      <div class="w-100 position-relative ibHolder py-19 py-md-23 py-xl-29">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <div class="captionWrap position-relative">
                <div class="wow fadeInUp" data-wow-delay="0.5s">
                  <h1 class="text-white font-weight-bold mb-5">
                    The best route for your education
                  </h1>
                </div>
                <div class="wow fadeInUp" data-wow-delay="1s">
                  <p>
                    Don't waste another minute, concentrate on your studies!
                  </p>
                </div>
                <div class="wow fadeInUp" data-wow-delay="1.5s">
                  <a
                    href="#scrollToWhy"
                    class="btn btn-info btnMin align-top mt-6 p-0 border-0 position-relative"
                    data-hover="Why Us?"
                  >
                    <span class="d-block btnText">Why?</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-12 col-md-6 d-none d-md-block imageWrap wow bounceInRight"
              data-wow-delay="2s"
            >
              <div class="imgHolder pl-7 pl-xl-12 position-relative">
                <img src={ headerImg } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <svg class="svgBg headerBGCust">
      <defs>
        <clipPath id="path01" clipPathUnits="objectBoundingBox">
          <path d="M 1 0 L 0.93 0 C 0.7 0.18 0.77 0.26 0.51 0.34 Q 0.36 0.38 0.52 1 L 1 1 Z"></path>
        </clipPath>
      </defs>
      <rect width="100%" height="100%" fill="#7730ef"></rect>
    </svg>

    <span class="position-absolute w-100 h-100 ibBgPattern"></span>
  </section>
);

export default Header;
