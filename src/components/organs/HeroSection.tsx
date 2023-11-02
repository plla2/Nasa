import { useCallback, useRef } from "react";
import Slider from "react-slick";
import HeroImg1 from "../../assets/hero/1.jpeg";
import HeroImg2 from "../../assets/hero/2.jpeg";
import HeroImg3 from "../../assets/hero/3.jpeg";
import { HeroTexts } from "../particles/Data";
import { Slide, Zoom } from "react-awesome-reveal";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { AiOutlineArrowLeft } from "@react-icons/all-files/ai/AiOutlineArrowLeft";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";

const HeroSection = () => {
  const slideRef = useRef<Slider | null>();

  const previous = () => {
    if (slideRef.current) {
      slideRef.current.slickPrev();
    }
  };

  const next = () => {
    if (slideRef.current) {
      slideRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const imageRender = useCallback((index: number) => {
    switch (index) {
      case 0:
        return HeroImg1;
      case 1:
        return HeroImg2;
      case 2:
        return HeroImg3;
      default:
        return "";
    }
  }, []);
  return (
    <section className="w-full h-auto bg-gradient-to-r from-red-500 to-amber-500 relative overflow-x-hidden ">
      <Slider
        ref={(slider) => (slideRef.current = slider)}
        {...settings}
        className="h-full"
      >
        {HeroTexts.map((hero, idx) => (
          <main
            className="w-full lg:h-screen md:h-[50vh] h-screen relative bg-zinc-900 overflow-x-hidden"
            key={idx}
          >
            <Zoom className="h-full">
              <Image
                className="md:w-[60%] w-full md:h-full h-1/2 "
                alt="hero"
                objectCover="object-cover"
                image={imageRender(idx)}
              />
            </Zoom>
            <div className="md:w-[50%] w-full md:h-full h-1/2 absolute md:top-0 right-0 bg-zinc-900 flex flex-col md:justify-center justify-start lg:gap-8 md:gap-4 gap-2 lg:px-20 md:px-6 px-4 overflow-x-hidden ">
              <Text as="h1" className="text-4xl text-zinc-100 font-extrabold">
                <Slide direction="right">{hero.Heading}</Slide>
              </Text>
              <Text as="p" className="lg:text-lg text-base text-zinc-400 my-4 ">
                <Slide direction="left">{hero.Paragraph}</Slide>
              </Text>
              <div className="flex items-center gap-8">
                <Slide direction="up">
                  <Button
                    type="button"
                    className="px-10 font-medium text-white py-2.5 rounded-md bg-gradient-to-r whitespace-nowrap from-red-500 to-amber-500"
                  >
                    {hero.Button}
                  </Button>
                </Slide>
              </div>
            </div>
          </main>
        ))}
      </Slider>
      <div className="flex justify-end items-center gap-4 absolute right-4 bottom-4 lg:justify-start lg:bottom-10 md:bottom-5 md:right-5">
        <Button
          onClick={previous}
          type="button"
          className="w-9 h-9 border rounded-full border-amber-500 flex justify-center items-center text-amber-400 hover:text-red-500 hover:border-red-500"
        >
          <AiOutlineArrowLeft />{" "}
        </Button>
        <Button
          onClick={next}
          type="button"
          className="w-9 h-9 border rounded-full border-amber-500 flex justify-center items-center text-amber-400 hover:text-red-500 hover:border-red-500"
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
