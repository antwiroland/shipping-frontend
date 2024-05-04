import slider from "../../assets/slider1.png"
import sTruck from "../../assets/s-truck-1.png"
function Slider() {
  return (
    <section id="ft-slider-3" className="ft-slider-section-3">
      <div 
        id="rev_slider_29_1_wrapper"
        data-alias="slider-8"
        data-source="gallery"
        // style={{
        //   visibility: "hidden",
        //   background: "transparent",
        //   padding: 0,
        //   margin: "0px auto",
        //   marginTop: 0,
        //   marginBottom: 0,
        // }}
      >
        <div id="rev_slider_29_1" data-version="6.5.8">
          <div className="rs-slides">
            <div
              className="rs-slide absolute"
            //   style={{ position: "absolute" }}
              data-key="rs-76"
              data-title="Slide"
              data-thumb="assets/slider1-50x100.png"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src={slider}
                alt="img"
                title="slider1"
                width="1920"
                height="989"
                className="rev-slidebg tp-rs-img"
                data-no-retina
              />
              {/* Layer 0 */}
              <div
                id="slider-29-slide-76-layer-0"
                className="rs-layer z-5 uppercase"
                data-type="text"
                data-color="#fa3b0e"
                data-rsp_ch="on"
                data-xy="xo:0,10px,7px,15px;yo:270px,222px,168px,104px;"
                data-text="w:normal;s:20,16,12,16;l:25,20,15,16;fw:500;"
                data-frame_0="x:-100%;"
                data-frame_0_mask="u:t;"
                data-frame_1="sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;"
                // style={{
                //   zIndex: 5,
                //   fontFamily: "Roboto",
                //   textTransform: "uppercase",
                // }}
              >
                We specialise in the transportation
              </div>
              {/* Layer 1 */}
              <div
                id="slider-29-slide-76-layer-1"
                className="rs-layer"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:0,9px,6px,15px;yo:325px,268px,203px,128px;"
                data-text="w:normal;s:60,49,37,30;l:65,53,40,30;fw:700;"
                data-frame_0="o:1;"
                data-frame_0_chars="d:5;x:105%;o:1;rY:45deg;rZ:90deg;"
                data-frame_0_mask="u:t;"
                data-frame_1="st:1000;sp:1200;"
                data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;"
                style={{
                  zIndex: 6,
                  fontFamily: "Poppins",
                  paddingBottom: "10px",
                }}
              >
                Focused on aviation
                <br /> and energy.
              </div>
              {/* Layer 2 */}
              <div
                id="slider-29-slide-76-layer-2"
                className="rs-layer z-7"
                data-type="text"
                data-rsp_ch="on"
                data-xy="xo:0,11px,8px,15px;yo:485px,400px,303px,198px;"
                data-text="w:normal;s:20,16,12,16;l:25,20,15,20;"
                data-frame_0="x:-175%;o:1;"
                data-frame_0_mask="u:t;x:100%;"
                data-frame_1="e:power3.out;st:1200;sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;"
                // style={{ zIndex: 7, fontFamily: "Roboto" }}
              >
                We own two core assets, London Southend Airport and Stobart
                <br /> Energy. Transformational and maturing business.
              </div>
              {/* Layer 3 */}
              <a
                id="slider-29-slide-76-layer-3"
                className="rs-layer rev-btn bg-blue-600 z-8 uppercase cursor-pointer"
                href="service.html"
                target="_blank"
                rel="noopener"
                data-type="button"
                data-rsp_ch="on"
                data-xy="xo:0,11px,8px,15px;yo:580px,478px,363px,250px;"
                data-text="w:normal;s:15,12,9,14;l:50,41,31,40;fw:700;a:center;"
                data-dim="w:200px,165px,125px,150px;h:50px,41px,31px,40px;minh:0px,none,none,none;"
                data-padding="r:25,21,16,10;l:25,21,16,10;"
                data-frame_0="x:100%;"
                data-frame_0_mask="u:t;"
                data-frame_1="st:1500;sp:1500;"
                data-frame_1_mask="u:t;"
                data-frame_999="o:0;st:w;"
                data-frame_hover="bgc:#ff3a2d;gs:sliding;bor:0px,0px,0px,0px;bri:120%;"
                // style={{
                //   zIndex: 8,
                //   backgroundColor: "#007aff",
                //   fontFamily: "Poppins",
                //   textTransform: "uppercase",
                //   cursor: "pointer",
                // }}
              >
                <i className="fas fa-cog"></i> View services
              </a>
              {/* Layer 4 */}
              <div
                id="slider-29-slide-76-layer-5"
                className="rs-layer z-9"
                data-type="image"
                data-rsp_ch="on"
                data-xy="x:r;xo:-181px,-149px,-113px,-191px;y:b;yo:90px,74px,56px,-15px;"
                data-text="w:normal;s:20,16,12,7;l:0,20,15,9;"
                data-dim="w:1034px,853px,648px,400px;h:599px,494px,375px,232px;"
                data-basealign="slide"
                data-frame_0="x:50,41,31,19;"
                data-frame_1="st:1700;sp:1500;"
                data-frame_999="o:0;st:w;"
                // style={{ zIndex: 9 }}
              >
                <img
                  src={sTruck}
                  alt="Img"
                  className="tp-rs-img"
                  width="1034"
                  height="599"
                  data-no-retina
                />
              </div>
            </div>
            {/* More Slides */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;