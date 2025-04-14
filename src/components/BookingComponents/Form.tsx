import { ChevronRight, ChevronUp } from "lucide-react";
import styles from "./Booking.module.css";
import { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import Modal from "../common/Modal/Modal";

const Form = ({ activity }: any) => {
  const { setPersons, loggedIn, loggedInEmail }: any =
    useContext(ActivityContext);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [person, setPerson] = useState("");
  const [val, setVal] = useState(loggedInEmail);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersons(Number(e.target.value));
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleBooking = (e: any) => {
    setEmail(e.target[0].value);
    setFirstName(e.target[1].value);
    setLastName(e.target[2].value);
    setDate(e.target[3].value);
    setPerson(e.target[4].value);
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleBooking}>
        <label className={styles.emailLabel} htmlFor="email">
          Email
        </label>
        {loggedIn ? (
          <input
            value={val}
            onChange={handleChangeEmail}
            type="email"
            name="email"
            required
          />
        ) : (
          <>
            <input type="email" name="email" required />
          </>
        )}

        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label className={styles.nameLabel} htmlFor="name">
              Förnamn
            </label>
            <input
              required
              type="text"
              name="name"
              className={styles.inputHalfSize}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.lastNameLabel} htmlFor="lastName">
              Efternamn
            </label>
            <input
              required
              type="text"
              name="lastName"
              className={styles.inputHalfSize}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <input
              required
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
        <button type="submit" className={styles.cta}>
          Boka
          <ChevronRight className={styles.chevron} size={32} />
        </button>
      </form>
      {modal && (
        <Modal
          modal={modal}
          setModal={setModal}
          activity={activity.h2}
          img={activity.img}
          email={email}
          date={date}
          firstName={firstName}
          lastName={lastName}
          persons={person}
          price={activity.price}
        />
      )}
    </>
  );
};
export default Form;
