import { ChevronRight, ChevronUp } from "lucide-react";
import styles from "./Booking.module.css";
import { useContext, useState } from "react";
import { ActivityContext } from "../Providers/ActivityContext";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast, Slide } from "react-toastify";
import OrderConfirmation from "./OrderConfirmation";
import { UserContext } from "../Providers/UserContext";

const Form = ({ activity, calcPrice }: any) => {
  const { setPersons }: any = useContext(ActivityContext);

  const { loggedIn, loggedInEmail }: any = useContext(UserContext);

  const [modal, setModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const email = form[0].value;
    const firstName = form[1].value;
    const lastName = form[2].value;
    const date = form[3].value;
    const person = form[4].value;

    setEmail(email);
    setFirstName(firstName);
    setLastName(lastName);
    setDate(date);
    setPerson(person);

    const order = {
      name: firstName + " " + lastName,
      email: email,
      activity: activity.h2,
      person: person,
      timestamp: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Order skickad: ", docRef.id, order);
      setOrderNumber(docRef.id);
      setModal(true);
    } catch (error) {
      console.error("Något gick fel: ", error);
      toast.error("Något gick fel, försök igen senare", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
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
            placeholder="adven.ture@gmail.com"
          />
        ) : (
          <>
            <input
              type="email"
              name="email"
              required
              placeholder="adven.ture@gmail.com"
            />
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
              placeholder="adven"
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
              placeholder="ture"
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
              min={new Date().toISOString().split("T")[0]}
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
        <OrderConfirmation
          modal={modal}
          setModal={setModal}
          orderNumber={orderNumber}
          activity={activity.h2}
          img={activity.img}
          email={email}
          date={date}
          firstName={firstName}
          lastName={lastName}
          persons={person}
          price={calcPrice(person, activity.price)}
        />
      )}
    </>
  );
};
export default Form;
