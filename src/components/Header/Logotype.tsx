import styles from "./Header.module.css";
import Logo from "./Logo.tsx";

const Logotype = () => {
  return (
    <div className={styles.logoContainer}>
      <Logo sides={55} />
      <h1>FriluftsFärder</h1>
    </div>
  );
};
export default Logotype;
