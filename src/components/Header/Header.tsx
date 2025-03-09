import styles from "./Header.module.css";
import Logotype from "./Logotype";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logotype />
      <Navbar />
      <Logotype />
    </header>
  );
};
export default Header;
