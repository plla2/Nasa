import About from "../organs/About";
import Calculator from "../organs/Calculator";
import HeroSection from "../organs/HeroSection";
import Membership from "../organs/Membership";
import { News } from "../organs/News";
import Offers from "../organs/Offers";
import Testimonials from "../organs/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Offers />
      <Membership />
      <Calculator />
      <Testimonials />
      <News />
    </>
  );
};

export default Home;
