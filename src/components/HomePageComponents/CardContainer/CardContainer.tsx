import Loading from "../../common/Loading/Loading";
import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./CardContainer.module.css";
import { ChevronRight } from "lucide-react";

interface Props {
  h2: string;
  buttonText: string;
  activity: ActivityObject[];
}

interface ActivityObject {
  id: string;
  img: string;
  h2: string;
  h3: string;
  price: string;
  rating: [number, number];
}

const CardContainer = ({ h2, buttonText, activity }: Props) => {
  if (!activity) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <h2>{h2}</h2>
      <p>
        Osäker på vad som skiljer dom olika upplevelserna åt?{" "}
        <a href="">Titta hit</a>
      </p>
      <div className={styles.cardContainer}>
        {activity.map((obj: ActivityObject) => (
          <ActivityCard
            key={obj.id}
            id={obj.id}
            img={obj.img}
            h2={obj.h2}
            h3={obj.h3}
            price={obj.price}
            rating={obj.rating}
          />
        ))}
      </div>
      <button className={styles.cta}>
        {buttonText}
        <ChevronRight className={styles.chevron} size={32} />
      </button>
    </div>
  );
};

export default CardContainer;
