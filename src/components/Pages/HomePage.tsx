import { useContext, useEffect } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import CardContainer from "../HomePageComponents/CardContainer/CardContainer";
import Hero from "../HomePageComponents/Hero/Hero";
import TestimonialBanner from "../HomePageComponents/TestimonalBanner/TestimonialBanner";
import BlogItem from "../common/BlogItem/BlogItem";
import Carousell from "../HomePageComponents/Carousell/Carousell";
import Loading from "../common/Loading/Loading";
import Testimonials from "../HomePageComponents/Testimonials/Testimonials";

const HomePage = () => {
  const {
    climbingActivities,
    kayakActivities,
    snowshoesActivities,
    blogItems,
    climbingSectionRef,
  }: any = useContext(ActivityContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
        link="/activity/climbing"
        activities={climbingActivities}
        ref={climbingSectionRef}
      ></CardContainer>
      <Carousell />
      <CardContainer
        h2="Kajakupplevelser"
        buttonText="Fler kajakupplevelser"
        link="/activity/kayak"
        activities={kayakActivities}
      ></CardContainer>
      {blogItems[0] ? <BlogItem blogItem={blogItems[0]} /> : <Loading />}
      <CardContainer
        h2="Snöskovandringar"
        buttonText="Fler snöskovandringar"
        link="/activity/snowshoes"
        activities={snowshoesActivities}
      ></CardContainer>
      <Testimonials />
    </>
  );
};
export default HomePage;
