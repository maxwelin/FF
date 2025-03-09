import styles from "./TestimonialBanner.module.css";
import { Star } from "lucide-react";

interface Props {
  img: string;
  name: string;
  // stars: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
}

const Testimonial = ({ img, name, text }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <img src={img} alt="Portrait photo" />
        <div className={styles.h2Container}>
          <h2>{name}</h2>
        </div>
        <div className={styles.pContainer}>
          <p>"{text}"</p>
        </div>
        <div className={styles.starContainer}>
          <Star size={20} color="#FFD700" fill="#FFD700" />
          <Star size={20} color="#FFD700" fill="#FFD700" />
          <Star size={20} color="#FFD700" fill="#FFD700" />
          <Star size={20} color="#FFD700" fill="#FFD700" />
          <Star size={20} color="#FFD700" fill="#FFD700" />
        </div>
      </div>
    </>
  );
};
export default Testimonial;
