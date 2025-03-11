import styles from "./Hero.module.css";
import { ChevronRight } from "lucide-react";

const Button = () => {
  return (
    <button className={styles.cta}>
      <p>Till våra äventyr</p>{" "}
      <ChevronRight className={styles.chevron} size={32} />
    </button>
  );
};

export default Button;
