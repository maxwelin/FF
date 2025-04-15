import styles from "./Header.module.css";
import Logo from "./Logo.tsx";
import { NavLink } from "react-router-dom";

const Logotype = () => {
  return (
    <>
      <NavLink className={styles.navLink} to="/">
        <div className={styles.logoContainer}>
          <Logo sides={55} />
          <h1 className={styles.logotype}>FriluftsFärder</h1>
        </div>
      </NavLink>
    </>
  );
};
export default Logotype;
