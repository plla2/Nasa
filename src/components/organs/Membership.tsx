import List from "../atoms/List";
import Text from "../atoms/Text";
import Card from "../molecules/Card";
import { MembershipPlans } from "../particles/Data";

const Membership = () => {
  return (
    <section>
      <div>
        <Text as="p" className="">
          {MembershipPlans.firstText}
        </Text>
        <Text as="h1" className="">
          {MembershipPlans.secondText}
        </Text>
        <Text as="h1" className="">
          03
        </Text>
      </div>
      <main>
        {MembershipPlans.cards.map((card, index) => (
          <Card className="" key={index}>
            <Text as="h2" className="">
              <span>$</span>
              <span>{card.amount}</span>
              <span>/{card.duration}</span>
            </Text>
            <Text as="h3" className="">
              {card.caption}
            </Text>
            <ul>
              {card.benefits.map((benefit, index) => (
                <List className="" key={index}>
                  {benefit}
                </List>
              ))}
            </ul>
          </Card>
        ))}
      </main>
    </section>
  );
};

export default Membership;
