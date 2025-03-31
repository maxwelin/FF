import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

interface Props {
  img: string;
  name: string;
  activity: string;
  text: string;
}

const TestimonialCard = ({ img, name, activity, text }: Props) => {
  return (
    <div className={styles.card}>
      <h4>"</h4>
      <img src={img} alt={`Photo of ${name}`} />
      <h2>{name}</h2>
      <p>{activity}</p>
      <div className={styles.starContainer}>
        <Star size={20} color="#FFD700" fill="#FFD700" />
        <Star size={20} color="#FFD700" fill="#FFD700" />
        <Star size={20} color="#FFD700" fill="#FFD700" />
        <Star size={20} color="#FFD700" fill="#FFD700" />
        <Star size={20} color="#FFD700" fill="#FFD700" />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default TestimonialCard;
