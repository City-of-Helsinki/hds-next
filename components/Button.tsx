import { Button, IconTrash, IconShare, IconAngleRight } from "hds-react";

const ButtonExample = () => {
  const onClick = () => {
    console.log("Button clicked");
  };

  const props = {
    style: { marginBottom: "var(--spacing-xs)" },
    onClick: onClick,
  };
  return (
    <section>
      <h2>Button</h2>
      <Button {...props}>Button</Button>{" "}
      <Button {...props} variant="secondary">
        Button
      </Button>{" "}
      <Button {...props} variant="supplementary" iconLeft={<IconTrash />}>
        Button
      </Button>{" "}
      <Button {...props} size="small">
        Button
      </Button>{" "}
      <Button {...props} fullWidth>
        Button
      </Button>{" "}
      <Button {...props} iconLeft={<IconShare />}>
        Button
      </Button>{" "}
      <Button {...props} iconRight={<IconAngleRight />}>
        Button
      </Button>{" "}
      <Button
        {...props}
        iconLeft={<IconShare />}
        iconRight={<IconAngleRight />}
      >
        Button
      </Button>
    </section>
  );
};

export default ButtonExample;
