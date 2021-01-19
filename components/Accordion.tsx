import { Accordion } from "hds-react";

const AccordionExample = () => {
  const args = {
    heading: "How to publish data?",
    children:
      'To publish your data, open your profile settings and click button "Publish".',
    style: { maxWidth: "360px", marginBottom: "20px" },
  };

  return (
    <section>
      <h2>Accordion</h2>
      <Accordion {...args} />
      <Accordion {...args} card />
      <Accordion {...args} card border />
    </section>
  );
};

export default AccordionExample;
