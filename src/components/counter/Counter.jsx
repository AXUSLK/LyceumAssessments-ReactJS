// import React from 'react';
// import { google, slack, atlassian, dropbox, shopify } from './imports';
import "./counter.css";

const Counter = () => (
  <div class="mt-md-n12 mt-lg-n14 pt-md-12 pt-lg-14">
    <aside class="factsCounterAside position-relative text-center pb-12 pb-lg-20 pb-xl-24">
      <div class="container">
        <div class="fcbHolder rounded-lg bg-primary text-white mx-xlwd-n10 pt-8 pb-2 px-5 pt-md-12 pb-md-10 px-md-10 pt-lg-12 pb-lg-10 px-lg-15 pt-xl-17 pb-xl-13 px-xl-20 position-relative shadow-lg overflow-hidden">
          <header class="headingHead textMedium text-center text-gray9da8bc mb-7 mb-lg-14 wow bounceInUp">
            <h2 class="text-white h2Medium mb-3 mb-md-5">Some Real Facts</h2>
            <p>
              We are committed to creating sustainable quality internationally
              recognized education opportunities.
            </p>
          </header>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-4 wow flipInX" data-wow-delay="0.5s">
              <div class="countColumn mx-auto mb-6">
                <h3 class="text-info fontBase font-weight-normal mb-0">28+</h3>
                <h4 class="font-weight-normal fontBase text-gray86a0bc">
                  Years of Experience
                </h4>
              </div>
            </div>
            <div class="col-12 col-sm-4 wow flipInX" data-wow-delay="0.5s">
              <div class="countColumn mx-auto mb-6">
                <h3 class="text-info fontBase font-weight-normal mb-0">
                  2.5K+
                </h3>
                <h4 class="font-weight-normal fontBase text-gray86a0bc">
                  Teachers & Team
                </h4>
              </div>
            </div>
            <div class="col-12 col-sm-4 wow flipInX" data-wow-delay="0.5s">
              <div class="countColumn mx-auto mb-6">
                <h3 class="text-info fontBase font-weight-normal mb-0">20K+</h3>
                <h4 class="font-weight-normal fontBase text-gray86a0bc">
                  Students
                </h4>
              </div>
            </div>
          </div>

          <span class="bgPattern position-absolute w-100 h-100 inaccessible"></span>
        </div>
      </div>
    </aside>
  </div>
);

export default Counter;
