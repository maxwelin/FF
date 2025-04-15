import styles from "./Hero.module.css";
import HeroGrid from "./HeroGrid";

const Hero = () => {
  return (
    <div className={styles.imgContainer}>
      <img src="/assets/heroKajak.png" alt="couple paddling kayak" />
      <HeroGrid />
    </div>
  );
};

export default Hero;
