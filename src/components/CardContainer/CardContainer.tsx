import styles from "./CardContainer.module.css";

interface Props {
  h2: string;
  buttonText: string;
  children: React.ReactNode;
}

const CardContainer = ({ h2, buttonText, children }: Props) => {
  return (
    <div className={styles.container}>
      <h2>{h2}</h2>
      <p>
        Osäker på vad som skiljer dom olika upplevelserna åt?{" "}
        <a href="">Titta hit</a>
      </p>
      <div className={styles.cardContainer}>{children}</div>
      <button className={styles.cta}>{buttonText}</button>
    </div>
  );
};

export default CardContainer;
