import Button from "./Button";
import styles from "./Hero.module.css";

const HeroText = () => {
  return (
    <>
      <h2 className={styles.heroText}>
        Skapa minnen för livet,
        <br />
        ditt nästa äventyr börjar här
      </h2>
      <p>
        Upptäck naturen på dina villkor. Klättring, <br />
        kajak eller snöskovandring? Vi har upplevelser för alla.
      </p>
    </>
  );
};

const HeroGrid = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textButtonContainer}>
        <HeroText />
        <Button />
      </div>
    </div>
  );
};

export default HeroGrid;
