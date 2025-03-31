import styles from "./ActivityPage.module.css";

const ActivityHero = ({ activity }: any) => {
  const { img, h1, h2, h3 } = activity;

  return (
    <>
      <div className={styles.imgContainer}>
        <img src={img} alt={`${h1} image`} loading="eager" />
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h1>{h1}</h1>
            <h2 className={styles.heroText}>{h2}</h2>
            <h3 className={styles.heroText}>{h3}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default ActivityHero;
