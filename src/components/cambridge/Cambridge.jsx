import cambridge_logo from "../../assets/images/cambridge_logo.png";
import "./cambridge.css";

const Cambridge = () => (
  <div>
    <aside class="tryPetAside text-center text-white py-5 py-lg-8 wow pulse">
      <div class="container">
        <p class="mb-0">
          Ready to get started? Don't waste another minute!
          <a
            href="javascript:void(0);"
            class="btn btnWhite mt-3 mt-md-0 mx-md-4 mx-lg-10 btnMin p-0 border-0 position-relative"
            data-hover="Try it"
          >
            <span class="d-block btnText">Candidate Registration</span>
          </a>
        </p>
      </div>
    </aside>

    <div
      id="scrollToCambridge"
      class="mt-md-n12 mt-lg-n14 pt-md-12 pt-lg-14 wow fadeIn"
      data-wow-delay="1s"
    >
      <article class="testimonialsBlock bg-light pt-7 pb-5 pt-md-9 pb-md-7 pt-lg-14 pb-lg-12 pt-xl-21 pb-xl-19">
        <div class="container">
          <header class="text-center mb-8">
            <h2 class="h4 font-weight-normal">Candidate Registration System</h2>
          </header>
          <div class="row">
            <div class="col-12 col-md-10 offset-md-1">
              <div class="quotesSlider">
                <div>
                  <blockquote class="clientQuote fontAlter position-relative text-primary pt-25 pt-sm-0 pl-sm-40 pl-xl-50 mb-0">
                    <q class="d-block position-relative mb-7 pt-4 pl-12 pl-sm-0">
                      Cambridge Assessment International Education Examinations
                      registration for the session May/June 2022 is now live.
                      Please complete your online registration process.{" "}
                    </q>
                    <cite class="d-block pl-12 pl-sm-0">
                      <span class="profilePicWrap position-absolute overflow-hidden rounded-circle">
                        <img
                          src={cambridge_logo}
                          class="img-fluid w-100 h-100 imgFit rounded-circle"
                          alt="Donald Salvor || Global Initiative"
                        />
                      </span>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <table class="infoTable">
                <tbody>
                  <tr>
                    <th width="298">
                      <p>
                        <strong>Key dates</strong>
                      </p>
                    </th>
                    <th width="234">
                      <p>
                        <strong>The year 2022</strong>
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <td width="298">
                      <p>Normal Registration Period (Final Entry)</p>
                    </td>
                    <td width="234">
                      <p>02nd February - 14th February</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="298">
                      <p>Late Penalty Registration Period</p>
                    </td>
                    <td width="234">
                      <p>15th February &ndash; 11th April</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="298">
                      <p>Very Late Penalty Registration Period</p>
                    </td>
                    <td width="234">
                      <p>12th April onwards</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="298">
                      <p>Timetabled Exam Period</p>
                    </td>
                    <td width="234">
                      <p>25 April - 10 June</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </article>
    </div>
  </div>
);

export default Cambridge;
