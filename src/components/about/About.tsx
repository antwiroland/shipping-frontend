import abt2 from "../../assets/img/about/ab2.png";
import signSh from "../../assets/img/shape/sign-sh.png";
import sign from "../../assets/img/about/sign.png";
const AboutSection = () => {
  return (
    <section id="ft-about-3" className="ft-about-section-3">
      <div className="container">
        <div className="ft-about-content-3">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="ft-about-img-wrapper-3 position-relative">
                <div className="ft-about-img-3">
                  <img src={abt2} alt="" />
                </div>
                <div className="ft-about-sign-img-text">
                  <span className="sign-shape">
                    <img src={signSh} alt="" />
                  </span>
                  <div className="ft-about-sign-img">
                    <img src={sign} alt="" />
                  </div>
                  <div className="ft-about-sign-text">
                    <span>Chris Hamlet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ft-about-text-3">
                <div
                  className="ft-section-title-3 headline wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <span className="text-uppercase">
                    We specialise in the transportation
                  </span>
                  <h2>We are proud of our workforce and have worked hard.</h2>
                </div>
                <div
                  className="ft-about-sub-text wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  This in turn has created a culture we have become respected
                  for, and one that our clients regularly commend us for,
                  feeding back what a pleasure it is to work with both our
                  service staff and the crew members.
                </div>
                <div
                  className="ft-about-feature-3 wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ft-about-feature-text">
                        We are very proud of our workforce and have worked hard
                        to create a business that attracts those people who want
                        to appreciate the importance.
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="ft-about-feature-text">
                        This in turn has created a culture we have become
                        respected for, and one that our clients regularly
                        commend us for feeding back crew members.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ft-about-btn-group text-uppercase d-flex wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <a
                    className="d-flex justify-content-center align-items-center"
                    href="contact.html"
                  >
                    Get a quote now! <i className="fas fa-arrow-right"></i>
                  </a>
                  <a
                    className="d-flex justify-content-center align-items-center"
                    href="about.html"
                  >
                    About Us <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
