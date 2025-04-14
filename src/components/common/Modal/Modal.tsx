import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { X } from "lucide-react";

const Modal = ({
  modal,
  setModal,
  activity,
  img,
  email,
  firstName,
  lastName,
  date,
  persons,
  price,
}: any) => {
  const toggleModal = () => {
    setModal(!modal);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(loading);
    const timer = setTimeout((loading: boolean) => {
      setLoading(false);
      console.log(loading);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const orderNumber = "A83nfdDBw8";

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal}></div>
      {modal && (
        <div className={styles.modalContent}>
          {loading ? (
            <>
              <div className={styles.spinnerContainer}>
                <div className={styles.spinner}></div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.orderConfirmation}>
                <h2>Tack {firstName} för din bokning!</h2>
                <p>
                  Vi har skickat en orderbekräftelse till {email}, det kan ta
                  några minuter innan du ser mailet i din inkorg.
                </p>
                <p>Ditt ordernummer är #{orderNumber}.</p>
              </div>
              <div className={styles.orderInformation}>
                <h2>{activity}</h2>
                <p>
                  {firstName} {lastName}
                </p>
                <p>{persons} personer</p>
                <p> Datum: {date}</p>
                <p>Pris: {price} SEK</p>
                <p className={styles.gray}>
                  Vid avbokning kontakta vår support <br /> senast 24h innan
                </p>
              </div>
              <div className={styles.imgContainer}>
                <img src={img} alt={`${activity} photo`} />
              </div>
            </>
          )}

          <X size={32} className={styles.closeModal} onClick={toggleModal} />
        </div>
      )}
    </div>
  );
};
export default Modal;
