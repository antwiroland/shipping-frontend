
import ser4 from "../../assets/img/service/ser4.jpg";
import ser6 from "../../assets/img/service/ser6.jpg";
import ser8 from "../../assets/img/service/ser8.jpg";
const SpecialistLogisticsServices = () => {
  return (
    <section id="ft-service-3" className="ft-service-section-3">
      <div className="container">
        <div
          className="ft-section-title-3 headline text-center wow fadeInUp"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <span className="text-uppercase">
            We specialise in the transportation
          </span>
          <h2>Specialist Logistics Services</h2>
        </div>
        <div className="ft-service-content-3">
          <div className="ft-service-content-items-3">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="ft-service-innerbox-3 position-relative">
                  <div className="ft-service-img position-relative">
                    <img src={ser4} alt="" />
                  </div>
                  <div className="ft-service-text-icon position-relative">
                    <div className="ft-service-icon d-flex align-items-center justify-content-center position-absolute">
                      <i className="flaticon-plane"></i>
                    </div>
                    <div className="ft-service-text position-relative headline pera-content">
                      <h3>
                        <a href="service-single.html">Air Freight Service</a>
                      </h3>
                      <p>
                        Once your business gets last-mile delivery right, it
                        becomes a hallmark of your service which creates a
                        serious business opportunity.
                      </p>
                    </div>
                  </div>
                  <div className="more-btn position-absolute">
                    <a
                      className="d-flex align-items-center justify-content-center text-uppercase"
                      href="service-single.html"
                    >
                      Read more <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="ft-service-innerbox-3 position-relative">
                  <div className="ft-service-img position-relative">
                    <img src={ser6} alt="" />
                  </div>
                  <div className="ft-service-text-icon position-relative">
                    <div className="ft-service-icon d-flex align-items-center justify-content-center position-absolute">
                      <i className="flaticon-boat"></i>
                    </div>
                    <div className="ft-service-text position-relative headline pera-content">
                      <h3>
                        <a href="service-single.html">Sea Transportation</a>
                      </h3>
                      <p>
                        Once your business gets last-mile delivery right, it
                        becomes a hallmark of your service which creates a
                        serious business opportunity.
                      </p>
                    </div>
                  </div>
                  <div className="more-btn position-absolute">
                    <a
                      className="d-flex align-items-center justify-content-center text-uppercase"
                      href="service-single.html"
                    >
                      Read more <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="ft-service-innerbox-3 position-relative">
                  <div className="ft-service-img position-relative">
                    <img src={ser8} alt="" />
                  </div>
                  <div className="ft-service-text-icon position-relative">
                    <div className="ft-service-icon d-flex align-items-center justify-content-center position-absolute">
                      <i className="flaticon-free-shipping"></i>
                    </div>
                    <div className="ft-service-text position-relative headline pera-content">
                      <h3>
                        <a href="service-single.html">Road Transportation</a>
                      </h3>
                      <p>
                        Once your business gets last-mile delivery right, it
                        becomes a hallmark of your service which creates a
                        serious business opportunity.
                      </p>
                    </div>
                  </div>
                  <div className="more-btn position-absolute">
                    <a
                      className="d-flex align-items-center justify-content-center text-uppercase"
                      href="service-single.html"
                    >
                      Read more <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ft-service-more-btn d-flex flex-wrap justify-content-center align-items-center wow fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <span>
              Our list of services does not end here. Find out how we can help
              you and your business.
            </span>
            <a
              className="text-uppercase align-items-center justify-content-center d-flex"
              href="service.html"
              target="_blank"
            >
              More Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistLogisticsServices;
