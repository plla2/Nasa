import { Fade } from "react-awesome-reveal";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import Image from "../atoms/Image";
import CalImg from "../../assets/gym/9.jpeg";

const Calculator = () => {
  return (
    <section>
      <main>
        <div>
          <Fade>
            <div>
              <Text as="p" className="">
                Advanced Calculator
              </Text>
              <Text as="h1" className="">
                Calculate Your BMI
              </Text>
              <Text as="h1" className="">
                04
              </Text>
            </div>
            <Form />
          </Fade>
        </div>
        <div>
          <Image
            alt="CalImg"
            objectCover="object-cover"
            className=""
            image={CalImg}
          />
        </div>
      </main>
    </section>
  );
};

export default Calculator;
