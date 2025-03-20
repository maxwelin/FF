import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./CardContainer.module.css";
import { ChevronRight } from "lucide-react";

interface Props {
  h2: string;
  buttonText: string;
  activity: JSONObject[];
}

interface JSONObject {
  img: string;
  h2: string;
  text: string;
  price: string;
  rating: [number, number];
}

const CardContainer = ({ h2, buttonText, activity }: Props) => {
  return (
    <div className={styles.container}>
      <h2>{h2}</h2>
      <p>
        Osäker på vad som skiljer dom olika upplevelserna åt?{" "}
        <a href="">Titta hit</a>
      </p>
      <div className={styles.cardContainer}>
        {activity.map((obj: JSONObject, index: number) => (
          <ActivityCard
            key={index}
            img={obj.img}
            h2={obj.h2}
            text={obj.text}
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
