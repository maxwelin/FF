import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import CardContainer from "../CardContainer/CardContainer";
import Hero from "../Hero/Hero";
import TestimonialBanner from "../TestimonalBanner/TestimonialBanner";
import BlogItem from "../BlogItem/BlogItem";

const HomePage = () => {
  const { activities, blogItems }: Object[] = useContext(ActivityContext);

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
