import { useContext } from "react";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TestimonialBanner from "./components/TestimonalBanner/TestimonialBanner";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { ActivityContext } from "./components/Providers/ActivityContext";

interface JSONObject {
  img: string;
  h2: string;
  text: string;
  price: string;
  rating: [number, number];
}

function App() {
  const { activities } = useContext(ActivityContext);

  return (
    <>
      <Header />
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
      >
        {activities.climbing.map((obj: JSONObject, index: number) => (
          <ActivityCard
            key={index}
            img={obj.img}
            h2={obj.h2}
            text={obj.text}
            price={obj.price}
            rating={obj.rating}
          />
        ))}
      </CardContainer>

      <CardContainer h2="Kajakupplevelser" buttonText="Fler kajakupplevelser">
        {activities.kayak.map((obj: JSONObject, index: number) => (
          <ActivityCard
            key={index}
            img={obj.img}
            h2={obj.h2}
            text={obj.text}
            price={obj.price}
            rating={obj.rating}
          />
        ))}
      </CardContainer>

      <CardContainer h2="Snöskovandringar" buttonText="Fler snöskovandringar">
        {activities.snowshoes.map((obj: JSONObject, index: number) => (
          <ActivityCard
            key={index}
            img={obj.img}
            h2={obj.h2}
            text={obj.text}
            price={obj.price}
            rating={obj.rating}
          />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}

export default App;
