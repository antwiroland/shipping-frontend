import blog3 from "../../assets/img/blog/blg3.3.jpg";
import blog4 from "../../assets/img/blog/blg3.4.jpg";
import blog5 from "../../assets/img/blog/blg3.5.jpg";
const BlogSection = () => {
  return (
    <section id="ft-blog-3" className="ft-blog-section-3">
      <div className="container">
        <div className="ft-section-title-3 headline text-center">
          <span className="text-uppercase">
            Some of our news from latest blog
          </span>
          <h2>Get the latest news, advice & best practice from blog.</h2>
        </div>
        <div className="ft-blog-content-3">
          <div className="blog-slider-3">
            <div className="ft-item-innerbox">
              <div className="ft-blog-innerbox-3 position-relative">
                <div className="ft-blog-img">
                  <img src={blog3} alt="Blog Image 1" />
                </div>
                <div className="ft-blog-text headline pera-content position-relative">
                  <div className="ft-blog-meta d-flex justify-content-between">
                    <a href="#">
                      <i className="fas fa-calendar-alt"></i> September 12, 2019
                    </a>
                    <a href="#">
                      <i className="fas fa-user"></i> Admin
                    </a>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      Organisational teams of the are just like families.
                    </a>
                  </h3>
                  <a
                    className="more-btn text-uppercase d-flex justify-content-center align-items-center position-absolute"
                    href="blog-single.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Repeat the structure for other blog items */}
            <div className="ft-item-innerbox">
              <div className="ft-blog-innerbox-3 position-relative">
                <div className="ft-blog-img">
                  <img src={blog4} alt="Blog Image 2" />
                </div>
                <div className="ft-blog-text headline pera-content position-relative">
                  <div className="ft-blog-meta d-flex justify-content-between">
                    <a href="#">
                      <i className="fas fa-calendar-alt"></i> September 12, 2019
                    </a>
                    <a href="#">
                      <i className="fas fa-user"></i> Admin
                    </a>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      From Monday 14th June we look a little different!
                    </a>
                  </h3>
                  <a
                    className="more-btn text-uppercase d-flex justify-content-center align-items-center position-absolute"
                    href="blog-single.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="ft-item-innerbox">
              <div className="ft-blog-innerbox-3 position-relative">
                <div className="ft-blog-img">
                  <img src={blog5} alt="Blog Image 3" />
                </div>
                <div className="ft-blog-text headline pera-content position-relative">
                  <div className="ft-blog-meta d-flex justify-content-between">
                    <a href="#">
                      <i className="fas fa-calendar-alt"></i> September 12, 2019
                    </a>
                    <a href="#">
                      <i className="fas fa-user"></i> Admin
                    </a>
                  </div>
                  <h3>
                    <a href="blog-single.html">
                      The current UK Haulage Market – How will this...
                    </a>
                  </h3>
                  <a
                    className="more-btn text-uppercase d-flex justify-content-center align-items-center position-absolute"
                    href="blog-single.html"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* Repeat as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
