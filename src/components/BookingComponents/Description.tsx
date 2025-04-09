import ActivityCard from "../common/ActivityCard/ActivityCard";
import styles from "./Booking.module.css";

const Description = ({ activity, similarActivities }: any) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3>{activity.h4}</h3>
        <ul className={styles.descriptionContainer}>
          <li>{activity.description}</li>
          <li>{activity.meeting_point}</li>
          <li>{activity.information}</li>
        </ul>
        <div className={styles.certificateContainer}>
          <h3>Trygghet och expertis i naturen</h3>
          <img src="/assets/trygghet.png" alt="" />
          <p>
            Alla våra guider genomgår regelbundna säkerhetsutbildningar
            <br />
            och följer strikt våra säkerhetsprotokoll för att du ska känna
            <br />
            dig trygg under hela upplevelsen.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Andra liknande upplevelser</h3>
        <div className={styles.similairContainer}>
          {similarActivities.map((activity: any) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              img={activity.img}
              h2={activity.h2}
              h3={activity.h3}
              price={activity.price}
              rating={activity.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Description;
