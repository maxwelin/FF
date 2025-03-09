import { useEffect, useState } from "react";
import ActivityCard from "./components/ActivityCard/ActivityCard";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TestimonialBanner from "./components/TestimonalBanner/TestimonialBanner";
import "./index.css";

function App() {
  interface JSONObject {
    img: string;
    h2: string;
    text: string;
    price: string;
    rating: [number, number];
  }

  const [activities, setActivities] = useState<{
    climbing: JSONObject[];
    kayak: JSONObject[];
    snowshoes: JSONObject[];
  }>({
    climbing: [],
    kayak: [],
    snowshoes: [],
  });

  useEffect(() => {
    fetch("/mockData/mockData.json")
      .then((response) => response.json())
      .then((json) => setActivities(json));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
      >
        {activities.climbing.map((obj, index) => (
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
        {activities.kayak.map((obj, index) => (
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
        {activities.snowshoes.map((obj, index) => (
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
    </>
  );
}

export default App;
