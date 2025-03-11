import styles from "./Header.module.css";
import { User, Heart, Search } from "lucide-react";

const Icons = () => {
  return (
    <div className={styles.iconContainer}>
      <Search className={styles.icon} />
      <Heart className={styles.icon} />
      <User className={styles.icon} />
    </div>
  );
};
export default Icons;
