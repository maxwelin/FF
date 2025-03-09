import ActivityCard from "./components/ActivityCard/ActivityCard";
import CardContainer from "./components/CardContainer/CardContainer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TestimonialBanner from "./components/TestimonalBanner/TestimonialBanner";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <TestimonialBanner />
      <CardContainer
        h2="Klättringsupplevelser"
        buttonText="Fler klättringsupplevelser"
      >
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
      </CardContainer>

      <CardContainer h2="Kajakupplevelser" buttonText="Fler kajakupplevelser">
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
      </CardContainer>

      <CardContainer h2="Snöskovandringar" buttonText="Fler snöskovandringar">
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
        <ActivityCard
          img="../../../public/assets/topprep.png"
          h2="Topprepsklättring"
          text="Säker och spännande topprepsklättring, i par eller solo med guide"
          price="475"
          rating={[4.8, 394]}
        />
      </CardContainer>
    </>
  );
}

export default App;
