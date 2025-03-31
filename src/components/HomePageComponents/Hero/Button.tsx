import { useContext } from "react";
import { ActivityContext } from "../../Providers/ActivityContext";
import styles from "./Hero.module.css";
import { ChevronRight } from "lucide-react";

const Button = () => {
  const { climbingSectionRef }: any = useContext(ActivityContext);

  const handleClick = () => {
    if (climbingSectionRef.current) {
      climbingSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button className={styles.cta} onClick={handleClick}>
      <p>Till våra äventyr</p>{" "}
      <ChevronRight className={styles.chevron} size={32} />
    </button>
  );
};

export default Button;
