import Loading from "../Loading/Loading";
import ActivityCard from "../ActivityCard/ActivityCard";
import styles from "./CardContainer.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  h2: string;
  buttonText: string;
  link: string;
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

const CardContainer = ({ h2, buttonText, link, activity }: Props) => {
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
      <Link to={link} className={styles.cta}>
        {buttonText}
        <ChevronRight className={styles.chevron} size={32} />
      </Link>
    </div>
  );
};

export default CardContainer;
