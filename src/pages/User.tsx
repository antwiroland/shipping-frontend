import AboutSection from "@/components/about/About";
import BlogSection from "@/components/blog/Blog";
import CaseStudySection from "@/components/caseStudy/CaseStudy";
import FunFactSection from "@/components/funFact/FunFact";
import SpecialistLogisticsServices from "@/components/service/Service";
import Slider from "@/components/slider/Slider";
import TestimonialSection from "@/components/testimonails/Testimonail";
import WhyChooseSection from "@/components/whyChooseUs/WhyChooseUs";

function User() {
  return (
    <>
      <Slider />
      <SpecialistLogisticsServices />
      <AboutSection />
      <CaseStudySection />
      <FunFactSection />
      <WhyChooseSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}

export default User;
