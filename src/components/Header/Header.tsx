import styles from "./Header.module.css";
import HeaderIcons from "./HeaderIcons";
import Logotype from "./Logotype";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logotype />
      <Navbar />
      <HeaderIcons />
    </header>
  );
};
export default Header;
