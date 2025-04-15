import styles from "./Booking.module.css";
import { Check, Star, StarHalf } from "lucide-react";
import Form from "./Form";
import { ReactNode, useContext, useEffect } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import FavoriteButton from "../common/FavoriteButton/FavoriteButton";

export const Main = ({ activity }: any) => {
  const { persons, setPersons, reviewRef }: any = useContext(ActivityContext);

  const isEven = (rating: number): boolean => {
    return rating % 1 == 0;
  };

  useEffect(() => {
    setPersons(1);
  }, []);

  const price = Number(activity.price);

  const calcPrice = (persons: number, price: number) => {
    if (persons > 2) {
      return Math.ceil(price * persons * 0.9);
    } else {
      return Math.ceil(price * persons);
    }
  };

  const handleClick = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const greaterThanTwo = persons > 2;

  return (
    <main className={styles.main}>
      <div className={`${styles.imgContainer} ${styles.container}`}>
        <FavoriteButton h2={activity.h2} id={activity.id} />
        <img src={activity.img} alt="" />
      </div>
      <div className={`${styles.textContainer} ${styles.container}`}>
        <h1>{activity.h2}</h1>
        {greaterThanTwo ? (
          <h2>
            {calcPrice(persons, price)} SEK <p>-10%</p>
          </h2>
        ) : (
          <h2>{calcPrice(persons, price)} SEK</h2>
        )}
        <div className={styles.review} onClick={handleClick}>
          {isEven(activity.rating[0]) ? (
            <p>{activity.rating[0]}.0</p>
          ) : (
            <p>{activity.rating[0]}</p>
          )}
          <div className={styles.starContainer}>
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <Star size={20} color="#FFD700" fill="#FFD700" />
            <StarHalf size={20} color="#FFD700" fill="#FFD700" />
          </div>
          <p className={styles.reviewers}>({activity.rating[1]})</p>
        </div>
        <ul>
          {activity.listItems.map((item: ReactNode, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Form activity={activity} calcPrice={calcPrice} />
        <div className={styles.checkContainer}>
          <p>
            <Check className={styles.check} />
            Betala med klarna
          </p>
          <p>
            <Check className={styles.check} />
            Prisgaranti
          </p>
          <p>
            <Check className={styles.check} />
            Avboka kostadsfritt 24h innan
          </p>
        </div>
      </div>
    </main>
  );
};
