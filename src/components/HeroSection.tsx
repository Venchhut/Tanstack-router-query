import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={style.container} size="md">
        <Title className={style.title}>
          A fully featured React components library
        </Title>
        <Text className={style.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={style.control}
        >
          Get started
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;
