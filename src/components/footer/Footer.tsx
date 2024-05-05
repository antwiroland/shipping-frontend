import Fbg3 from "../../assets/img/bg/f-bg3.jpg";
import logo2 from "../../assets/img/logo/logo2.png";
import gl1 from "../../assets/img/gallery/gl1.jpg";
import gl2 from "../../assets/img/gallery/gl2.jpg";
import gl3 from "../../assets/img/gallery/gl3.jpg";
import gl4 from "../../assets/img/gallery/gl4.jpg";
import gl5 from "../../assets/img/gallery/gl5.jpg";
import gl6 from "../../assets/img/gallery/gl6.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="ft-footer-3"
      className="ft-footer-section-3"
      data-background={Fbg3}
    >
      <div className="ft-newslatter-section-3">
        <div className="container">
          <div className="ft-newslatter-content-3 d-flex justify-content-between align-items-center">
            <div className="ft-newslatter-text headline">
              <h3>Looking for the Best Transport Services?</h3>
              <span>
                As a app web crawler expert, We will help to organize.
              </span>
            </div>
            <div className="ft-newslatter-btn position-relative">
              <Link
                className="d-flex align-items-center justify-content-center text-uppercase"
                to="/login"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-footer-widget-wrapper-3 bg-blue-950">
        <div className="container">
          <div className="ft-footer-content-wrap-3">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="ft-footer-widget">
                  <div className="ft-footer-logo-widget headline pera-content">
                    <div className="ft-footer-logo">
                      <a href="#">
                        <img src={logo2} alt="Footer Logo" />
                      </a>
                    </div>
                    <p>
                      We work with a passion of taking challenges and creating
                      new ones in advertising sector.
                    </p>
                    <a
                      className="footer-logo-btn text-center text-uppercase"
                      href="about.html"
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-footer-widget">
                  <div className="ft-footer-newslatter-widget pera-content headline">
                    <h3 className="widget-title">Newsletter</h3>
                    <p>
                      Subscribe our newsletter to get our latest update & news
                    </p>
                    <form action="#">
                      <input type="email" placeholder="Your mail address" />
                      <button title="a" type="submit">
                        <i className="far fa-paper-plane"></i>
                      </button>
                    </form>
                    <div className="ft-footer-social ul-li">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-footer-widget">
                  <div className="ft-footer-newslatter-widget pera-content headline">
                    <div className="ft-footer-info-widget ul-li ">
                      <h3 className="widget-title">Official info:</h3>
                      <ul>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>
                          <a href="#">30 Commercial Road Fratton, Australia</a>
                        </li>
                        <li>
                          <i className="fas fa-phone"></i>
                          <a href="#">1-888-452-1505</a>
                        </li>
                      </ul>
                      <div className="office-open-hour">
                        <span>Open Hours: </span>
                        <p>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="ft-footer-widget ul-li-block headline pera-content">
                  <div className="gallery-widget clearfix">
                    <h3 className="widget-title">Gallery </h3>
                    <ul className="zoom-gallery">
                      <li>
                        <a
                          href="assets/img/gallery/gl1.jpg"
                          data-source="assets/img/gallery/gl1.jpg"
                        >
                          <img src={gl1} alt="Gallery Image 1" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl2.jpg"
                          data-source="assets/img/gallery/gl2.jpg"
                        >
                          <img src={gl2} alt="Gallery Image 2" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl3.jpg"
                          data-source="assets/img/gallery/gl3.jpg"
                        >
                          <img src={gl3} alt="Gallery Image 3" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl4.jpg"
                          data-source="assets/img/gallery/gl4.jpg"
                        >
                          <img src={gl4} alt="Gallery Image 4" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl5.jpg"
                          data-source="assets/img/gallery/gl4.jpg"
                        >
                          <img src={gl5} alt="Gallery Image 5" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/gallery/gl6.jpg"
                          data-source="assets/img/gallery/gl4.jpg"
                        >
                          <img src={gl6} alt="Gallery Image 6" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="ft-footer-copyright text-center">
              <span>© USPX Cargo and Shipping.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
