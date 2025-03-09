import Button from "./Button";
import styles from "./Hero.module.css";

const HeroText = () => {
  return (
    <>
      <h2 className={styles.heroText}>
        Skapa minnen för livet,
        <br />
        ditt nästa äventyr börjar här
        <p>
          Upptäck naturen på dina villkor. Klättring, <br />
          kajak eller snöskovandring? Vi har upplevelser för alla.
        </p>
      </h2>
    </>
  );
};

const HeroGrid = () => {
  return (
    <div className={styles.heroGrid}>
      <HeroText />
      <Button />
    </div>
  );
};

export default HeroGrid;
