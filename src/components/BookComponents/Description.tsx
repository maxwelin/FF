import ActivityCard from "../HomePageComponents/ActivityCard/ActivityCard";
import styles from "./Main.module.css";

const Description = ({ activity }: any) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3>{activity.h3}</h3>
        <p>{activity.text}</p>
        <div className={styles.descriptionContainer}>
          <h3>Trygghet och expertis i naturen</h3>
          <p>
            Alla våra guider genomgår regelbundna säkerhetsutbildningar och
            följer strikt våra säkerhetsprotokoll för att du ska känna dig trygg
            under hela upplevelsen.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Andra liknande upplevelser</h3>
        <div className={styles.similairContainer}>
          <ActivityCard id="" img="" h2="" h3="" price="" rating={[1, 2]} />
          <ActivityCard id="" img="" h2="" h3="" price="" rating={[1, 2]} />
        </div>
      </div>
    </div>
  );
};
export default Description;
