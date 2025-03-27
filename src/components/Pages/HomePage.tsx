import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import CardContainer from "../HomePageComponents/CardContainer/CardContainer";
import Hero from "../HomePageComponents/Hero/Hero";
import TestimonialBanner from "../HomePageComponents/TestimonalBanner/TestimonialBanner";
import BlogItem from "../common/BlogItem/BlogItem";
import Carousell from "../HomePageComponents/Carousell/Carousell";
import Loading from "../common/Loading/Loading";

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
      {blogItems[0] ? <BlogItem blogItem={blogItems[0]} /> : <Loading />}
      <CardContainer
        h2="Snöskovandringar"
        buttonText="Fler snöskovandringar"
        activity={activities.snowshoes}
      ></CardContainer>
    </>
  );
};
export default HomePage;
