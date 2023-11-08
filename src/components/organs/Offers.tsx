import { Fade } from "react-awesome-reveal";
import OfferImg from "../../assets/hero/3.jpeg";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { OfferTexts } from "../particles/Data";
import { BiRun } from "@react-icons/all-files/bi/BiRun";
import { IoBarbell } from "@react-icons/all-files/io5/IoBarbell";
import { GiPrivateFirstClass } from "@react-icons/all-files/gi/GiPrivateFirstClass";
import { useCallback } from "react";
import List from "../atoms/List";

const Offers = () => {
  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <BiRun />;
      case 1:
        return <IoBarbell />;
      case 2:
        return <GiPrivateFirstClass />;
      default:
        return "";
    }
  }, []);

  return (
    <section>
      <main>
        <div>
          <Image
            alt="offer"
            objectCover="object-cover"
            className=""
            image={OfferImg}
          />
        </div>
        <div>
          <Fade>
            <div>
              <Text as="p" className="">
                {OfferTexts.firstText}
              </Text>
              <Text as="h1" className="">
                {OfferTexts.secondText}
              </Text>
              <Text as="h1" className="">
                02
              </Text>
            </div>
            <ul>
              {OfferTexts.list.map((item, index) => (
                <List className="" key={index}>
                  <Text as="span" className="">
                    {renderIcons(index)}
                  </Text>
                  <div>
                    <Text as="h3" className="">
                      {item.listCaption}
                    </Text>
                    <Text as="p" className="">
                      {item.text}
                    </Text>
                  </div>
                </List>
              ))}
            </ul>
          </Fade>
        </div>
      </main>
    </section>
  );
};

export default Offers;
