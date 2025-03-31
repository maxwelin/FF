import { useContext } from "react";
import { ActivityContext } from "../../Providers/ActivityContext";
import styles from "./TestimonialBanner.module.css";
import { Star } from "lucide-react";

interface Props {
  img: string;
  name: string;
  // stars: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
}

const Testimonial = ({ img, name, text }: Props) => {
  const { testimonialRef }: any = useContext(ActivityContext);

  const handleClick = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <img src={img} alt="Portrait photo" />
        <div className={styles.h2Container}>
          <h2>{name}</h2>
          <div className={styles.starContainer}>
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Star size={16} color="#FFD700" fill="#FFD700" />
          </div>
        </div>
        <div className={styles.pContainer}>
          <p>"{text}"</p>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
