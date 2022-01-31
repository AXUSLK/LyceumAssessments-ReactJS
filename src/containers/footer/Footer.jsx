import React from "react";
import logo from "../../assets/images/LYA__LOGO.png";
import "./footer.css";

const Footer = () => (
  <div
    class="ftAreaWrap bg-primary text-gray777fa1 wow fadeIn"
    data-wow-delay="0.5s"
  >
    <aside
      id="scrollToContact"
      class="footerAside pt-20 pt-md-10 pt-lg-16 pb-1 pb-md-4 position-relative text-center text-sm-left"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-6  position-static">
            <div class="ftLogo mb-6 mx-auto mx-md-0">
              <a href="javascript:void(0);">
                <img src={logo} class="img-fluid" alt="" />
              </a>
            </div>

            <address class="ftAddress text-center text-md-left mb-6 mt-6 mt-md-0">
              3/1, Raymond Road, Nugegoda, Sri Lanka
            </address>
          </div>

          <div class="col-md-4">
            <address class="ftAddress text-center text-md-left mb-6 mt-6 mt-md-0">
              info_assessments@lyceum.lk
            </address>

            <ul class="list-unstyled socialNetworks ftSocialNetworks d-flex justify-content-center justify-content-md-start mx-n1">
              <li>
                <a href="javascript:void(0);">
                  <i class="fab fa-facebook-square">
                    <span class="sr-only">facebook</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fab fa-twitter">
                    <span class="sr-only">twitter</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i class="fab fa-instagram">
                    <span class="sr-only">instagram</span>
                  </i>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-4">
            <h3 class="h6 text-white mb-4">Why Us?</h3>

            <form action="#" class="ftScribeForm">
              <strong class="d-block font-weight-normal mb-6">
                As leaders in education in Sri Lanka the Lyceum Group is
                committed to creating sustainable quality internationally
                recognized education opportunities
              </strong>
            </form>
          </div>
        </div>
      </div>
    </aside>

    <footer id="pageFooter" class="text-center fontAlter">
      <div class="container">
        <div class="pfHolder pt-7 pb-5">
          <p>
            Copyright © 2022 Lyceum Assessments All Rights Reserved. Concept
            Designed and Developed by&nbsp;
            <a target="_blank" href="https://zuse.lk/">
              ZUSE Technologies.
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
