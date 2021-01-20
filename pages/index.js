import { Button, Container } from "hds-react";
import NavigationExample from "../components/Navigation";
import AccordionExample from "../components/Accordion";
import ButtonExample from "../components/Button";
import CardExample from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NavigationExample />
      <Container className={styles.container}>
        <AccordionExample />
        <ButtonExample />
        <CardExample />
      </Container>
    </>
  );
}
