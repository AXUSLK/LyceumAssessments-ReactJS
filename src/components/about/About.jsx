// import React from 'react';

import about from "../../assets/images/about.png";
import "./about.css";

const About = () => (
  <div id="scrollToAbout" class="mt-md-n12 mt-lg-n14 pt-md-12 pt-lg-14">
    <section class="featureBlock pt-8 pb-8 pt-md-13 pb-md-13 pt-lg-19 pb-lg-20 pt-xl-23 pb-xl-24">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10 offset-lg-1">
            <header class="headingHead textMedium text-center mb-8 mb-lg-10 mb-xl-14 wow bounceInUp">
              <h2 class="mb-5">
                Lyceum Placements and Lyceum Assessments are the latest
                additions to the Lyceum Group.
              </h2>
              <p>
                Develop an informed curiosity and a lasting passion for
                learning.
              </p>
            </header>
          </div>
        </div>

        <article class="afColumn mb-7 mb-md-11 mb-lg-18">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 wow slideInLeft">
              <div class="imgHolder position-relative mx-auto mb-4 mb-md-0">
                <img src={about} class="img-fluid" alt="image description" />

                <span class="bgPattern position-absolute aboutBG"></span>
              </div>
            </div>
            <div class="col-12 col-md-6 wow slideInRight">
              <div class="extraWrap pl-md-7 pl-lg-14">
                <header class="titleWrap">
                  <h3 class="mb-5">About Lyceum Assessments</h3>
                  <p>
                    Lyceum Assessments is a fully owned subsidiary of the Lyceum
                    Group. We are focusing on conducting, administering and
                    offering competitive international and Lyceum examinations
                    to students island-wide.
                  </p>
                  <p>
                    Lyceum Assessments (Pvt) Limited was incorporated as a
                    private limited company under the Companies Act of Sri Lanka
                    on 27th July 2021.
                  </p>
                </header>

                <ul
                  class="nav nav-tabs afTabsList border-0 fontAlter fwMedium mt-8"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="analytics-tab"
                      data-toggle="tab"
                      href="#analytics"
                      role="tab"
                      aria-controls="analytics"
                      aria-selected="true"
                    >
                      Our Vision
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="traffic-tab"
                      data-toggle="tab"
                      href="#traffic"
                      role="tab"
                      aria-controls="traffic"
                      aria-selected="false"
                    >
                      Our Mission
                    </a>
                  </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="analytics"
                    role="tabpanel"
                    aria-labelledby="analytics-tab"
                  >
                    <div class="mtctWrap overflow-hidden pt-5">
                      <p>
                        To become the market leader in the administration of
                        assessments in the region.
                      </p>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="traffic"
                    role="tabpanel"
                    aria-labelledby="traffic-tab"
                  >
                    <div class="mtctWrap overflow-hidden pt-5">
                      <p>
                        To provide the expertise required to assess learning at
                        different levels of education by making globally
                        recognized awards and qualifications accessible &
                        affordable to all while ensuring international quality
                        standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export default About;
