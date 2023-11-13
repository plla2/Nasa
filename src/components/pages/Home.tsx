import About from "../organs/About";
import Calculator from "../organs/Calculator";
import HeroSection from "../organs/HeroSection";
import Membership from "../organs/Membership";
import Offers from "../organs/Offers";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Offers />
      <Membership />
      <Calculator />
    </>
  );
};

export default Home;
