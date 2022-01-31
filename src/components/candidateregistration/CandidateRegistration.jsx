import bgShapes05 from "../../assets/images/bgShapes05.png";
import bgShapes04 from "../../assets/images/bgShapes04.jpg";
import "./candidateregistration.css";

const CandidateRegistration = () => (
  <aside class="getStartedAside textMedium position-relative d-flex w-100 bg-info text-center overflow-hidden">
    <div class="d-flex w-100 gsaHolder align-items-center">
      <div class="w-100 py-7">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3 wow wobble">
              <div class="infoTableP">
                <p>&nbsp;</p>
                <p>
                  Lyceum Assessments deadlines for Cambridge International
                  May/June 2022 exams session
                </p>
                <p>&nbsp;</p>
                <p>
                  Candidates are requested to take note of the registration
                  deadline. Registration is completed once you submit the
                  application and completed the relevant payment.
                </p>
                <p>&nbsp;</p>
                <p>
                  Any payments made after the deadline will be treated as late
                  and subjected to the appropriate extra late fee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span
      class="bgPattern bgPatterni inaccessible position-absolute wow bounceInDown"
      data-wow-delay="1s"
    >
      <img src={bgShapes05} class="img-fluid" alt="image description" />
    </span>
    <span
      class="bgPattern bgPatternii inaccessible position-absolute  wow bounceInUp"
      data-wow-delay="1s"
    >
      <img src={bgShapes04} class="img-fluid" alt="image description" />
    </span>
  </aside>
);
export default CandidateRegistration;
