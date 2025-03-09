import styles from "./ActivityCard.module.css";
import { Star } from "lucide-react";

interface Props {
  img: string;
  h2: string;
  text: string;
  price: string;
  rating: [number, number];
}

const ActivityCard = ({ img, h2, text, price, rating }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.textContainer}>
        <h2>{h2}</h2>
        <p>{text}</p>
        <p className={styles.price}>{price} SEK</p>
        <div className={styles.review}>
          <p>{rating[0]}</p>
          <Star size={20} color="#FFD700" fill="#FFD700" />
          <p className={styles.reviewers}>({rating[1]})</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
