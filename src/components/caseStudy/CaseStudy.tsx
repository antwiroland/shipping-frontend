import cs1 from "../../assets/img/project/cs1.jpg";
import cs2 from "../../assets/img/project/cs2.jpg";
import cs3 from "../../assets/img/project/cs3.jpg";
import cs4 from "../../assets/img/project/cs4.jpg";
// import cs2 from "../../assets/img/project/cs2.jpg";

const CaseStudySection = () => {
  return (
    <section id="ft-case-study" className="ft-case-study-section">
      <div className="ft-case-study-content d-flex">
        <div className="ft-case-study-items position-relative">
          <div className="ft-case-study-img position-relative">
            <img src={cs1} alt="" />
          </div>
          <div className="ft-case-study-text headline pera-content">
            <span className="serial-no">01</span>
            <h3>
              <a href="project-single.html">CT Scanner from Italy to the UK</a>
            </h3>
            <p>
              Before anything’s loaded up, there’s de-racking, packing and
              tracking. There’s surveying and risk assessment.{" "}
            </p>
          </div>
          <a
            className="more-btn d-flex align-items-center justify-content-center"
            href="project-single.html"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="ft-case-study-items position-relative">
          <div className="ft-case-study-img position-relative">
            <img src={cs2} alt="" />
          </div>
          <div className="ft-case-study-text headline pera-content">
            <span className="serial-no">02</span>
            <h3>
              <a href="project-single.html">Specialist transport services.</a>
            </h3>
            <p>
              Before anything’s loaded up, there’s de-racking, packing and
              tracking. There’s surveying and risk assessment.{" "}
            </p>
          </div>
          <a
            className="more-btn d-flex align-items-center justify-content-center"
            href="project-single.html"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="ft-case-study-items position-relative">
          <div className="ft-case-study-img position-relative">
            <img src={cs3} alt="" />
          </div>
          <div className="ft-case-study-text headline pera-content">
            <span className="serial-no">03</span>
            <h3>
              <a href="project-single.html">
                Cash Counters to Paddington Station.
              </a>
            </h3>
            <p>
              Before anything’s loaded up, there’s de-racking, packing and
              tracking. There’s surveying and risk assessment.{" "}
            </p>
          </div>
          <a
            className="more-btn d-flex align-items-center justify-content-center"
            href="project-single.html"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="ft-case-study-items position-relative">
          <div className="ft-case-study-img position-relative">
            <img src={cs4} alt="" />
          </div>
          <div className="ft-case-study-text headline pera-content">
            <span className="serial-no">04</span>
            <h3>
              <a href="project-single.html">
                UK Exhibition support for TENESO Italy.
              </a>
            </h3>
            <p>
              Before anything’s loaded up, there’s de-racking, packing and
              tracking. There’s surveying and risk assessment.{" "}
            </p>
          </div>
          <a
            className="more-btn d-flex align-items-center justify-content-center"
            href="project-single.html"
          >
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
