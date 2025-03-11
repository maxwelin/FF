import styles from "./CardContainer.module.css";
import { ChevronRight } from "lucide-react";

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
      <button className={styles.cta}>
        {buttonText}
        <ChevronRight className={styles.chevron} size={32} />
      </button>
    </div>
  );
};

export default CardContainer;
