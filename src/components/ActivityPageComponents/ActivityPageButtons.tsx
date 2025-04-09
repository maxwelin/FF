import { ChevronUp } from "lucide-react";
import styles from "./ActivityPage.module.css";
import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";

interface Activity {
  key: string;
  id: string;
  img: string;
  h2: string;
  h3: string;
  price: [string];
  rating: [number, number];
}

const ActivityPageButtons = ({ activities }: any) => {
  const { selectRef }: any = useContext(ActivityContext);

  const handleChange = (e) => {
    switch (e.target.value) {
      case "1":
        activities.sort((a: Activity, b: Activity) => {
          const firstLetterA = a.h2.charAt(0).toLowerCase();
          const firstLetterB = b.h2.charAt(0).toLowerCase();

          if (firstLetterA < firstLetterB) return -1;
          if (firstLetterA > firstLetterB) return 1;
          return 0;
        });
        break;

      case "2":
        activities.sort((a: Activity, b: Activity) => {
          const firstLetterA = a.h2.charAt(0).toLowerCase();
          const firstLetterB = b.h2.charAt(0).toLowerCase();

          if (firstLetterB < firstLetterA) return -1;
          if (firstLetterB > firstLetterA) return 1;
          return 0;
        });
        break;

      case "3":
        activities.sort((a: Activity, b: Activity) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        });
        break;

      case "4":
        activities.sort((a: Activity, b: Activity) => {
          if (b.price < a.price) return -1;
          if (b.price > a.price) return 1;
          return 0;
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>
        <select name="sortera" onChange={handleChange} ref={selectRef}>
          <option value="" disabled selected hidden>
            Sortera
          </option>
          <option value="1">A-Z</option>
          <option value="2">Z-A</option>
          <option value="3">Pris stigande</option>
          <option value="4">Pris fallande</option>
        </select>
        <ChevronUp className={styles.chevron} size={28} />
      </div>
      <button className={styles.button}>
        Filtrera
        <ChevronUp className={styles.chevron} size={28} />
      </button>
    </div>
  );
};
export default ActivityPageButtons;
