import Card from "../atoms/Card";
import Text from "../atoms/Text";
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
          <Card />
        ))}
      </main>
    </section>
  );
};

export default Membership;
