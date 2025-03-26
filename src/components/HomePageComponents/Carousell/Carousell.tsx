import styles from "./Carousell.module.css";

const Carousell = () => {
  const newDate = new Date();
  const day = newDate.getUTCDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  console.log(day, month);

  const monthMap = {
    0: "jan",
    1: "feb",
    2: "mar",
    3: "apr",
    4: "maj",
    5: "jun",
    6: "jul",
    7: "aug",
    8: "set",
    9: "okt",
    10: "nov",
    11: "dec",
  };

  return (
    <div className={styles.wrapper}>
      <h3>-30% på utvalda upplevelser, endast idag</h3>
      <p>
        Erbjudandet gäller t.o.m. {day} {monthMap[month]} {year} 23:59
      </p>
      <div className={styles.container}></div>
    </div>
  );
};
export default Carousell;
