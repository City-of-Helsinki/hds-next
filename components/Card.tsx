import { Card } from "hds-react";

const CardExample = () => {
  const props = {
    heading: "Card",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
  return (
    <section>
      <h2>Card</h2>
      <Card {...props} />
      <Card {...props} border />
    </section>
  );
};

export default CardExample;
