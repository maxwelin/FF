import styles from "./ActivityCardHorizontal.module.css";
import { Star, StarHalf } from "lucide-react";

interface Props {
  img: string;
  h2: string;
  listItems: string[];
  price: string;
  rating: [number, number];
}

const ActivityCardHorizontal = ({
  img,
  h2,
  listItems,
  price,
  rating,
}: Props) => {
  const isEven = (rating: number): boolean => {
    return rating % 1 == 0;
  };

  const calcNewPrice = (price: string): number => {
    const val = Number(price);
    return Math.ceil(val * 0.7);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.newPrice}>{calcNewPrice(price)} SEK</span>
        <span className={styles.oldPrice}>{price} SEK</span>
        <h2>{h2}</h2>
        <div className={styles.review}>
          {isEven(rating[0]) ? <p>{rating[0]}.0</p> : <p>{rating[0]}</p>}
          <div className={styles.starContainer}>
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <StarHalf size={20} color="#FFD700" fill="#FFD700" />
          </div>
          <p className={styles.reviewers}>({rating[1]})</p>
        </div>
        <ul>
          {listItems?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityCardHorizontal;
