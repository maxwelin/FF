import { ChevronRight, ChevronUp } from "lucide-react";
import styles from "./Booking.module.css";
import { useContext } from "react";
import { ActivityContext } from "../Providers/ActivityContext";

const Form = () => {
  const { setPersons }: any = useContext(ActivityContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(Number(e.target.value));
  };

  return (
    <form className={styles.formContainer}>
      <label className={styles.emailLabel} htmlFor="email">
        Email
      </label>
      <input type="email" name="email" placeholder="adven.ture@email.com" />
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label className={styles.nameLabel} htmlFor="name">
            Förnamn
          </label>
          <input
            type="text"
            name="name"
            className={styles.inputHalfSize}
            placeholder="Adven"
          />
        </div>
        <div className={styles.inputWrapper}>
          <label className={styles.lastNameLabel} htmlFor="lastName">
            Efternamn
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Ture"
            className={styles.inputHalfSize}
          />
        </div>
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="date"
            name="date"
            className={`${styles.inputHalfSize} ${styles.dateSelector}`}
          ></input>
          <ChevronUp className={styles.chevronDateSelect} size={28} />
        </div>
        <div className={styles.inputWrapper}>
          <select
            name="persons"
            onChange={handleChange}
            className={`${styles.inputHalfSize} ${styles.personSelector}`}
          >
            <option value="1">1 vuxen</option>
            <option value="2">2 vuxna</option>
            <option value="3">3 vuxna</option>
            <option value="4">4 vuxna</option>
            <option value="5">5 vuxna</option>
          </select>
          <ChevronUp className={styles.chevronPersonSelect} size={28} />
        </div>
      </div>
      <button type="button" className={styles.cta}>
        Boka
        <ChevronRight className={styles.chevron} size={32} />
      </button>
    </form>
  );
};
export default Form;
