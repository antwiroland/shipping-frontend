const WhyChooseSection = () => {
  return (
    <section
      id="ft-why-choose-2"
      className="ft-why-choose-section-2 position-relative"
    >
      <span className="why-choose-bg-2">
        <img src="assets/img/bg/wc-bg2.jpg" alt="" />
      </span>
      <span
        className="why-choose-img-2 position-absolute wow fadeInRight"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <img src="assets/img/about/ab3.png" alt="" />
      </span>
      <div className="container">
        <div className="ft-why-choose-content-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="ft-why-choose-text-2">
                <div className="ft-section-title-3 headline">
                  <span className="text-uppercase">Why choose us?</span>
                  <h2>We Create Opportunity to Reach Potential.</h2>
                </div>
                <div className="ft-why-choose-list-wrapper ul-li-block">
                  <ul>
                    <li>Career progression</li>
                    <li>
                      Fasttrans offers a clear and transparent career journey
                      and provides the support
                    </li>
                    <li>Make long term business decisions</li>
                    <li>Provide a service we are proud of</li>
                    <li>Be a responsible member of the community</li>
                    <li>Always seek to improve</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="ft-why-choose-form-wrapper">
                <div className="ft-why-choose-form pera-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="wc-input">
                          <span>Freight type:</span>
                          <div className="wc-select position-relative">
                            <select name="#">
                              <option value="#">Select</option>
                              <option value="#">Air Freight</option>
                              <option value="#">Sea Freight</option>
                              <option value="#">Road Freight</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="wc-input">
                          <span>Load:</span>
                          <div className="wc-select position-relative">
                            <select name="#">
                              <option value="#">Select</option>
                              <option value="#">500kg</option>
                              <option value="#">1000kg</option>
                              <option value="#">1500kg</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div
                          className="wc-input-range"
                          data-background="assets/img/bg/wc-f-bg.jpg"
                        >
                          <span>DIST (Miles):</span>
                          <div className="wc-input-range-area d-flex align-items-center">
                            <div id="slider-range" className="range-bar"></div>
                            <div className="range-value clearfix">
                              <input type="text" id="amount" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wc-input">
                          <span>Your name:</span>
                          <div className="wc-text-input position-relative">
                            <input type="text" placeholder="Jhon Doe.." />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wc-input">
                          <span>Phone number:</span>
                          <div className="wc-text-input position-relative">
                            <input type="text" placeholder="+883..." />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="text-uppercase" type="submit">
                      Submit request
                    </button>
                  </form>
                  <p>
                    By clicking on <a href="#">this button</a>, I agree to the
                    processing.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
