import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import CardContainer from "../HomePageComponents/CardContainer/CardContainer";
import Hero from "../HomePageComponents/Hero/Hero";
import TestimonialBanner from "../HomePageComponents/TestimonalBanner/TestimonialBanner";
import BlogItem from "../common/BlogItem/BlogItem";
import Carousell from "../HomePageComponents/Carousell/Carousell";

const HomePage = () => {
  const { activities, blogItems }: any = useContext(ActivityContext);

  return (
    <>
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
        activity={activities.climbing}
      ></CardContainer>
      <Carousell />
      <CardContainer
        h2="Kajakupplevelser"
        buttonText="Fler kajakupplevelser"
        activity={activities.kayak}
      ></CardContainer>
      <BlogItem
        h2={blogItems[0].h2}
        h3={blogItems[0].h3}
        img={blogItems[0].img}
        alt={blogItems[0].alt}
        text={blogItems[0].text}
      />
      <CardContainer
        h2="Snöskovandringar"
        buttonText="Fler snöskovandringar"
        activity={activities.snowshoes}
      ></CardContainer>
    </>
  );
};
export default HomePage;
