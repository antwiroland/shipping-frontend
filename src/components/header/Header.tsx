import { useNavigate } from "react-router-dom";
import MobileNav from "../mobile/MobileNav";
import TrackerForm, { TrackerData } from "../shippment/TrackerForm";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Sheet, SheetTrigger } from "../ui/sheet";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (trackerData: TrackerData) => {
    navigate({ pathname: `/track/${trackerData.tracker}` });
  };

  return (
    <header id="ft-header" className="ft-header-section header-style-three">
      <div className="container">
        <div className="ft-header-content position-relative">
          <div className="ft-header-top d-flex justify-content-end ul-li">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> 380 St Kilda Road,
                Australia
              </li>
              <li>
                <i className="fas fa-clock"></i> 380 St Kilda Road, Australia
              </li>
              <li>
                <i className="fas fa-phone"></i> 380 St Kilda Road, Australia
              </li>
            </ul>
          </div>
          <div className="ft-header-main-menu d-flex align-items-center justify-content-between">
            <div className="ft-brand-logo">
              {/* <a href="#">
                <img src="assets/img/logo/logo5.png" alt="" />
              </a> */}
            </div>
            <div className="ft-header-main-menu-cta  d-flex align-items-center">
              <nav className="ft-main-navigation clearfix ul-li">
                <ul id="ft-main-nav" className="nav navbar-nav clearfix">
                  <li className="dropdown">
                    <a href="%21.html#">Home</a>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <a href="index-1.html">Home Page 1</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li className="dropdown">
                    <a href="%21.html#">Service</a>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <a href="service.html">Service Page </a>
                      </li>
                      <li>
                        <a href="service-single.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="%21.html#">Project</a>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <a href="project.html">Project Page</a>
                      </li>
                      <li>
                        <a href="project-single.html">Project Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="%21.html#">News</a>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <a href="blog.html">News </a>
                      </li>
                      <li>
                        <a href="blog-single.html">News Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="%21.html#">Others</a>
                    <ul className="dropdown-menu clearfix">
                      <li>
                        <a href="team.html">Team Page </a>
                      </li>
                      <li>
                        <a href="team-single.html">Team Details </a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq Page</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Page</a>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing Page</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="ft-header-cta-btn">
                <Dialog>
                  <DialogTrigger>
                    <a className="d-flex justify-content-center align-items-center">
                      Track Shippment
                    </a>
                  </DialogTrigger>
                  <DialogContent className="max-w-[420px] md:min-w-[500px] bg-gray-50 rounded-lg">
                    <TrackerForm onSubmit={handleSubmit} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="mobile_menu position-relative">
            <Sheet>
              <SheetTrigger>
                <div className="mobile_menu_button open_mobile_menu">
                  <i className="fal fa-bars"></i>
                </div>
              </SheetTrigger>
              <MobileNav />
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
