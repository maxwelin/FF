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

const ActivityPageButtons = ({ activities, id }: any) => {
  const {
    selectRef,
    setSortedClimbingActivities,
    setSortedKayakActivities,
    setSortedSnowshoesActivities,
  }: any = useContext(ActivityContext);

  const setSortedActivityBasedOnId =
    id === "climbing"
      ? setSortedClimbingActivities
      : id === "kayak"
      ? setSortedKayakActivities
      : id === "snowshoes"
      ? setSortedSnowshoesActivities
      : [];

  const handleChange = (e: any) => {
    const sortedActivities = [...activities];

    switch (e.target.value) {
      case "1":
        sortedActivities.sort((a: Activity, b: Activity) => {
          const firstLetterA = a.h2.charAt(0).toLowerCase();
          const firstLetterB = b.h2.charAt(0).toLowerCase();

          if (firstLetterA < firstLetterB) return -1;
          if (firstLetterA > firstLetterB) return 1;
          return 0;
        });
        break;

      case "2":
        sortedActivities.sort((a: Activity, b: Activity) => {
          const firstLetterA = a.h2.charAt(0).toLowerCase();
          const firstLetterB = b.h2.charAt(0).toLowerCase();

          if (firstLetterB < firstLetterA) return -1;
          if (firstLetterB > firstLetterA) return 1;
          return 0;
        });
        break;

      case "3":
        sortedActivities.sort((a: Activity, b: Activity) => {
          if (Number(a.price) < Number(b.price)) return -1;
          if (Number(a.price) > Number(b.price)) return 1;
          return 0;
        });
        break;

      case "4":
        sortedActivities.sort((a: Activity, b: Activity) => {
          if (Number(b.price) < Number(a.price)) return -1;
          if (Number(b.price) > Number(a.price)) return 1;
          return 0;
        });
        break;

      case "5":
        sortedActivities.sort((a: Activity, b: Activity) => {
          if (Number(a.rating[0]) < Number(b.rating[0])) return -1;
          if (Number(a.rating[0]) > Number(b.rating[0])) return 1;
          return 0;
        });
        break;

      case "6":
        sortedActivities.sort((a: Activity, b: Activity) => {
          if (Number(b.rating[0]) < Number(a.rating[0])) return -1;
          if (Number(b.rating[0]) > Number(a.rating[0])) return 1;
          return 0;
        });
        break;

      default:
        break;
    }
    setSortedActivityBasedOnId(sortedActivities);
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
          <option value="5">Betyg stigande</option>
          <option value="6">Betyg fallande</option>
        </select>
        <ChevronUp className={styles.chevron} size={28} />
      </div>
    </div>
  );
};
export default ActivityPageButtons;
