import { useContext } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TestimonialBanner from "./components/TestimonalBanner/TestimonialBanner";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { ActivityContext } from "./components/Providers/ActivityContext";

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

      <Footer />
    </>
  );
}

export default App;
