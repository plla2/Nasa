import { Fade } from "react-awesome-reveal";
import Text from "../atoms/Text";
import { AboutTexts } from "../particles/Data";
import Image from "../atoms/Image";
import image1 from "../../assets/gym/2.jpeg";
import image2 from "../../assets/gym/3.jpeg";
import image3 from "../../assets/gym/4.jpeg";
import image4 from "../../assets/gym/5.jpeg";

const About = () => {
  return (
    <section>
      <main>
        <div>
          <Fade>
            <div>
              <Text as="p" className="">
                {AboutTexts.firstText}
              </Text>
              <Text as="h1" className="">
                {AboutTexts.secondText}
              </Text>
              <Text as="h1" className="">
                01
              </Text>
              Fade
            </div>
            <Text as="h2" className="">
              {AboutTexts.caption}
            </Text>
            <Text as="p" className="">
              {AboutTexts.paragraph1}
            </Text>
          </Fade>
        </div>
        <div>
          <Image
            image={image1}
            alt="Welcome"
            objectCover="object-cover"
            className=""
          />
          <Image
            image={image2}
            alt="Welcome"
            objectCover="object-cover"
            className=""
          />
          <Image
            image={image3}
            alt="Welcome"
            objectCover="object-cover"
            className=""
          />
          <Image
            image={image4}
            alt="Welcome"
            objectCover="object-cover"
            className=""
          />
        </div>
      </main>
    </section>
  );
};

export default About;
