// import "./slider.css"; // Assuming styles are defined in the CSS file
import slider1 from "../../assets/slider1.png";

const Slider = () => {
  return (
    <section id="ft-slider-3" className="w-full relative">
      <img
        src={slider1}
        alt="img"
        title="slider1"
        width="1920"
        height="989"
        className="rev-slidebg relative z-0"
        data-no-retina
      />

      <div className="text-orange-500 uppercase mt-2 absolute top-24 left-10 z-100 lg:top-44 lg:left-20 lg:text-3xl">
        We specialise in the transportation
      </div>

      <div className="text-white text-2xl absolute top-32 mt-2 left-10 z-100 lg:top-56 lg:left-20 lg:text-6xl font-bold">
        Focused on aviation
        <br /> and energy.
      </div>

      <div className="text-white text-sm absolute hidden md:block md:top-52 top-44 left-10 z-100 lg:top-96 lg:left-20 lg:text-2xl">
        We own two core assets, London Southend Airport and Stobart
        <br /> Energy. Transformational and maturing business.
      </div>

    </section>
  );
};

export default Slider;
