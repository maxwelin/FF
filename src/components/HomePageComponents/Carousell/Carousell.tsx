import { useContext } from "react";
import ActivityCardHorizontal from "../ActivityCardHorizontal/ActivityCardHorizontal";
import styles from "./Carousell.module.css";
import { ActivityContext } from "../../Providers/ActivityContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "../../common/Loading/Loading";

const Carousell = () => {
  const { climbingActivities, kayakActivities, snowshoesActivities } =
    useContext(ActivityContext);

  const newDate = new Date();
  const day = newDate.getUTCDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  const monthMap: any = {
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

  if (
    !climbingActivities[0] &&
    !kayakActivities[0] &&
    !snowshoesActivities[0]
  ) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <h3>-30% på utvalda upplevelser, endast idag</h3>
      <p>
        Erbjudandet gäller t.o.m.
        <strong>
          &nbsp;{day} {monthMap[month]} {year} 23:59
        </strong>
      </p>
      <div className={styles.cardContainer}>
        <ActivityCardHorizontal
          img={climbingActivities[0].img}
          h2={climbingActivities[0].h2}
          listItems={climbingActivities[0].listItems}
          price={climbingActivities[0].price}
          rating={[
            climbingActivities[0].rating[0],
            climbingActivities[0].rating[1],
          ]}
        />
        <ActivityCardHorizontal
          img={kayakActivities[0].img}
          h2={kayakActivities[0].h2}
          listItems={kayakActivities[0].listItems}
          price={kayakActivities[0].price}
          rating={[kayakActivities[0].rating[0], kayakActivities[0].rating[1]]}
        />
        <ActivityCardHorizontal
          img={snowshoesActivities[0].img}
          h2={snowshoesActivities[0].h2}
          listItems={snowshoesActivities[0].listItems}
          price={snowshoesActivities[0].price}
          rating={[
            snowshoesActivities[0].rating[0],
            snowshoesActivities[0].rating[1],
          ]}
        />
      </div>
      <button className={styles.leftBtn}>
        <ChevronLeft size={50} />
      </button>
      <button className={styles.rightBtn}>
        <ChevronRight size={50} />
      </button>
    </div>
  );
};
export default Carousell;
