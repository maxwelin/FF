import Loading from "../../common/Loading/Loading";
import ActivityCard from "../../common/ActivityCard/ActivityCard";
import styles from "./CardContainer.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  h2: string;
  buttonText: string;
  link: string;
  activities: ActivityObject[];
  ref?: React.RefObject<null>;
}

interface ActivityObject {
  id: string;
  img: string;
  h2: string;
  h3: string;
  price: string;
  rating: [number, number];
}

const CardContainer = ({ h2, buttonText, link, activities, ref }: Props) => {
  if (!activities) {
    return <Loading />;
  }
  return (
    <div className={styles.container} ref={ref}>
      <h2>{h2}</h2>
      <p>
        Osäker på vad som skiljer dom olika upplevelserna åt?{" "}
        <Link to={"/blog"}>Titta hit</Link>
      </p>
      <div className={styles.cardContainer}>
        {activities.slice(0, 4).map((obj: ActivityObject) => (
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
