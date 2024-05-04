import React from "react";
import tstBg from "../../assets/img/testimonial/tst-bg.jpg";
const TestimonialSection = () => {
  return (
    <section
      id="ft-testimonial-3"
      className="ft-testimonial-section-3 position-relative"
    >
      <div className="container">
        <div className="ft-testimonial-content-3">
          <div className="ft-testimonial-slider-wrapper-3 d-flex">
            <div className="ft-testimonial-slider-img">
              <img src={tstBg} alt="" />
            </div>
            <div className="ft-testimonial-slider-area-3">
              <div className="ft-testimonial-slider-3">
                <div className="ft-testimonial-slider-items-3 pera-content position-relative">
                  <p>
                    Recruiting for my required role hadn't been easy so Cast UK
                    jumped in with several desirable candidates for the role.
                  </p>
                  <div className="ft-testimonial-slider-author">
                    <span className="name">Lucy Davies</span>
                    <span className="designation">
                      Head of Supply Chain, Pharma Company
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
