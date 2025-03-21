import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";
import TestimonialBanner from "../TestimonalBanner/TestimonialBanner";

const HomePage = () => {
  const { activities }: Object[] = useContext(ActivityContext);

  return (
    <>
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
        activity={activities.climbing}
      ></CardContainer>
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
        activity={activities.kayak}
      ></CardContainer>
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
        activity={activities.snowshoes}
      ></CardContainer>
    </>
  );
};
export default HomePage;
