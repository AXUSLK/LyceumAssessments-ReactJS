import lyc_group from "../../assets/images/lyceum_group.png";
import cambridge from "../../assets/images/cambridge.png";

import "./why.css";

const Why = () => (
  <section
    id="scrollToWhy"
    class="allFeatBlock pt-7 pt-md-10 pt-lg-15 pt-xl-23 pb-3 pb-lg-10 pb-xl-14"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-10 offset-lg-1 col-xl-6 offset-xl-3">
          <header class="headingHead textMedium text-center mb-8 mb-lg-15 wow bounceInUp">
            <h1 class="mb-5">Why Us?</h1>
            <p>
              We are committed to creating sustainable quality internationally
              recognized education opportunities.
            </p>
          </header>
        </div>
      </div>

      <div class="afColumnsWrap">
        <article class="afColumn mb-7 mb-md-11 mb-lg-18">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 wow slideInLeft">
              <div class="imgHolder position-relative mx-auto mb-4 mb-md-0">
                <img
                  src={lyc_group}
                  class="img-fluid"
                  alt="image description"
                />

                <span class="bgPattern position-absolute lyaBG"></span>
              </div>
            </div>
            <div class="col-12 col-md-6 wow slideInRight">
              <div class="extraWrap pl-md-7 pl-lg-14">
                <header class="titleWrap">
                  <h3 class="mb-5">The Lyceum Group</h3>
                </header>
                <p>
                  <p>
                    Lyceum group allows the students to grow with international
                    ideals and character, in a multi-ethnic, multi-cultural and
                    multi-religious, school environment. Academic and
                    co-curricular programmes conducted by Lyceum International
                    Schools, fully complying with international standards.
                  </p>
                  <p>
                    The Honourable Dr. Mohan Lal Grero, a visionary educator
                    founded Lyceum International Schools in 1993 to provide
                    English medium education up to Grade 12. The school is
                    non-profit organization, which is co-educational and
                    committed to the pursuit of excellence in teaching and
                    learning in the English medium, which is accessible and
                    affordable to all within the socio-cultural environment of
                    Sri Lanka.
                  </p>
                  <p>
                    Lyceum Placements and Lyceum Assessments are the latest
                    additions to the Lyceum Group
                  </p>
                </p>
              </div>
            </div>
          </div>
        </article>

        <article class="afColumn mb-7 mb-md-11 mb-lg-18">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 wow slideInLeft">
              <div class="imgHolder position-relative mx-auto mb-4 mb-md-0">
                <img
                  src={cambridge}
                  class="img-fluid"
                  alt="image description"
                />

                <span class="bgPattern position-absolute cambridgeBG"></span>
              </div>
            </div>
            <div class="col-12 col-md-6 wow slideInRight">
              <div class="extraWrap pr-md-7 pr-lg-14">
                <header class="titleWrap">
                  <h3 class="mb-5">Cambridge International Examinations</h3>
                  <p>
                    <p>
                      Cambridge Assessment International Education prepares
                      school students for life, helping them develop an informed
                      curiosity and a lasting passion for learning.
                    </p>
                    <p>
                      Cambridge international qualifications are recognized by
                      the world&rsquo;s best universities and employers, giving
                      students a wide range of options in their education and
                      career. As a not-for-profit organization, Cambridge
                      devotes their resources to delivering high-quality
                      educational programs that can unlock learners' potential.
                    </p>
                  </p>
                </header>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Why;
