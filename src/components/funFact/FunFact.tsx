import map from "../../assets/img/bg/map.png";

const FunFactSection = () => {
  return (
    <section
      id="ft-funfact-2"
      className="ft-funfact-section-2"
      data-background="assets/img/bg/shape-bg.jpg"
    >
      <div className="container">
        <div className="ft-section-title-3 headline text-center">
          <span className="text-uppercase">
            We specialise in the transportation
          </span>
          <h2>Together, we have your logistical challenges covered.</h2>
        </div>
        <div className="ft-funfact-content-2 position-relative">
          <span className="map-bg position-absolute text-center">
            <img src={map} alt="" />
          </span>
          <div className="ft-funfact-inner-items-wrapper position-relative">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="ft-funfact-inner-items text-center">
                  <div className="ft-funfact-inner-icon d-flex align-items-center justify-content-center position-relative">
                    <i className="flaticon-delivery-truck"></i>
                  </div>
                  <div className="ft-funfact-inner-text headline pera-content">
                    <h3>
                      <span className="counter">1656</span>
                    </h3>
                    <p>Completed Delivery</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-funfact-inner-items text-center">
                  <div className="ft-funfact-inner-icon d-flex align-items-center justify-content-center position-relative">
                    <i className="flaticon-community"></i>
                  </div>
                  <div className="ft-funfact-inner-text headline pera-content">
                    <h3>
                      <span className="counter">1250</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-funfact-inner-items text-center">
                  <div className="ft-funfact-inner-icon d-flex align-items-center justify-content-center position-relative">
                    <i className="flaticon-compliance"></i>
                  </div>
                  <div className="ft-funfact-inner-text headline pera-content">
                    <h3>
                      <span className="counter">30</span>+
                    </h3>
                    <p>Awards Winner</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-funfact-inner-items text-center">
                  <div className="ft-funfact-inner-icon d-flex align-items-center justify-content-center position-relative">
                    <i className="flaticon-face-detection"></i>
                  </div>
                  <div className="ft-funfact-inner-text headline pera-content">
                    <h3>
                      <span className="counter">155</span>+
                    </h3>
                    <p>Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ft-funfact-slug-text text-center">
            <span>
              Join over 3000 people who engage with sector.{" "}
              <a href="#">Join Now!</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSection;
