import { Link } from "react-router-dom";
import styles from "./ActivityCard.module.css";
import { Star, Heart } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { ActivityContext } from "../../Providers/ActivityContext";

interface Props {
  id: string;
  img: string;
  h2: string;
  h3: string;
  price: string;
  rating: [number, number];
}

const ActivityCard = ({ id, img, h2, h3, price, rating }: Props) => {
  const { favoriteList, setFavoriteList } = useContext(ActivityContext);

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const isEven = (rating: number): boolean => {
    return rating % 1 == 0;
  };

  const removeFavorite = (i: number) => {
    setFavoriteList(
      favoriteList.filter((item: object, index: number) => index !== i)
    );
  };

  const toggleFavorite = () => {
    if (heartRef.current) heartRef.current.classList.toggle(styles.favorited);
    let alreadyFavorited = false;
    for (let i = 0; i < favoriteList.length; i++) {
      const element = favoriteList[i];
      if (element.id === id) {
        alreadyFavorited = !alreadyFavorited;
        removeFavorite(i);
      }
    }
    if (!alreadyFavorited) {
      setFavoriteList([...favoriteList, { id: id, name: h2 }]);
    }
    console.log(favoriteList, id);
  };

  const heartRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer} onClick={toggleFavorite}>
        <Heart className={styles.btn} ref={heartRef} />
      </div>
      <Link to={`/booking/${id}`} className={styles.link}>
        <div className={styles.imgContainer}>
          <img
            src={img}
            alt={h2 + " image"}
            loading="lazy"
            onLoad={handleImageLoad}
          />
          {isLoading && <div className={styles.spinner}></div>}
        </div>
        <div className={styles.textContainer}>
          <h2>{h2}</h2>
          <p>{h3}</p>
          <div className={styles.priceReviewContainer}>
            <p className={styles.price}>{price} SEK</p>
            <div className={styles.review}>
              {isEven(rating[0]) ? <p>{rating[0]}.0</p> : <p>{rating[0]}</p>}
              <Star size={20} color="#FFD700" fill="#FFD700" />
              <p className={styles.reviewers}>({rating[1]})</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActivityCard;
